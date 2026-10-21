/* =========================================================================
 * app.js — ポケカ情報まとめアプリ 表示ロジック
 * -------------------------------------------------------------------------
 * 役割: news.js で読み込んだ NEWS_DATA / NEWS_META を表示する。
 * データの収集・整理は行わない（それは Claude 側の担当）。
 * ========================================================================= */

(function () {
  "use strict";

  // フィルター表示順（news.js の category と一致させる）
  const CATEGORIES = [
    "新商品", "新カード", "大会", "環境", "再販",
    "販売", "ルール", "レギュレーション", "相場", "その他"
  ];

  // 画面の状態
  const state = {
    keyword: "",
    category: "すべて"
  };

  // ---- ユーティリティ ----

  // XSS対策: データ内の文字列は必ずエスケープしてから挿入
  function esc(str) {
    if (str === null || str === undefined) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  // 重要度(1〜5)を★表示に
  function stars(n) {
    const full = Math.max(0, Math.min(5, Number(n) || 0));
    return "★".repeat(full) + "☆".repeat(5 - full);
  }

  // 日付表示（null なら「公開日不明」）
  function formatDate(publishedAt) {
    if (!publishedAt) return "公開日不明";
    return publishedAt;
  }

  // 新しい順に並べる（publishedAt が null は末尾）
  function sortByNewest(list) {
    return list.slice().sort((a, b) => {
      if (!a.publishedAt && !b.publishedAt) return 0;
      if (!a.publishedAt) return 1;
      if (!b.publishedAt) return -1;
      return b.publishedAt.localeCompare(a.publishedAt);
    });
  }

  // ---- ヘッダー / バナー ----

  function renderMeta() {
    const meta = (typeof NEWS_META !== "undefined") ? NEWS_META : {};
    const el = document.getElementById("last-updated");
    if (el && meta.lastUpdated) {
      el.textContent = "最終更新: " + formatDateTime(meta.lastUpdated) + " / 確認日時ベース";
    }
    if (meta.isSample) {
      const banner = document.getElementById("sample-banner");
      banner.hidden = false;
      banner.textContent = "⚠ これはサンプル（ダミー）データです。実際のポケカ情報ではありません。";
    }
  }

  function formatDateTime(iso) {
    // "2026-10-18T21:35:00+09:00" → "2026-10-18 21:35"
    try {
      const d = new Date(iso);
      if (isNaN(d.getTime())) return iso;
      const pad = (x) => String(x).padStart(2, "0");
      return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ` +
             `${pad(d.getHours())}:${pad(d.getMinutes())}`;
    } catch (e) {
      return iso;
    }
  }

  // ---- ピックアップ（今日のニュース） ----

  function renderPickup() {
    const container = document.getElementById("pickup-list");
    const pickups = sortByNewest(NEWS_DATA.filter((n) => n.isPickup));
    if (pickups.length === 0) {
      container.innerHTML = '<p class="section-note">本日のピックアップはありません。</p>';
      return;
    }
    container.innerHTML = pickups.map((n) => `
      <div class="pickup-card imp-${esc(n.importance)}" data-id="${esc(n.id)}">
        <div class="pickup-cat">${categoryEmoji(n.category)} ${esc(n.category)}・${stars(n.importance)}</div>
        <div class="pickup-title">${esc(n.title)}</div>
        <p class="pickup-summary">${esc(n.summary)}</p>
      </div>
    `).join("");

    // クリックで該当ニュースへスクロール
    container.querySelectorAll(".pickup-card").forEach((card) => {
      card.addEventListener("click", () => {
        const target = document.getElementById("news-" + card.dataset.id);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "center" });
          target.classList.add("flash");
          setTimeout(() => target.classList.remove("flash"), 1200);
        }
      });
    });
  }

  function categoryEmoji(cat) {
    const map = {
      "新商品": "🆕", "新カード": "🃏", "大会": "🏆", "環境": "📈",
      "再販": "🏪", "販売": "🛒", "ルール": "📖", "レギュレーション": "⚖",
      "相場": "💰", "その他": "📰"
    };
    return map[cat] || "📰";
  }

  // ---- カテゴリフィルターボタン ----

  function renderFilters() {
    const container = document.getElementById("category-filters");
    const used = new Set(NEWS_DATA.map((n) => n.category));
    const cats = ["すべて"].concat(CATEGORIES.filter((c) => used.has(c)));
    container.innerHTML = cats.map((c) => `
      <button class="filter-btn ${c === state.category ? "active" : ""}" data-cat="${esc(c)}">
        ${c === "すべて" ? "すべて" : categoryEmoji(c) + " " + esc(c)}
      </button>
    `).join("");

    container.querySelectorAll(".filter-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.category = btn.dataset.cat;
        container.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        renderList();
      });
    });
  }

  // ---- ニュース一覧 ----

  function getFiltered() {
    const kw = state.keyword.trim().toLowerCase();
    return sortByNewest(NEWS_DATA.filter((n) => {
      if (state.category !== "すべて" && n.category !== state.category) return false;
      if (kw) {
        const hay = (n.title + " " + n.summary + " " + (n.relatedCards || []).join(" ")).toLowerCase();
        if (!hay.includes(kw)) return false;
      }
      return true;
    }));
  }

  function renderList() {
    const container = document.getElementById("news-list");
    const empty = document.getElementById("empty-message");
    const count = document.getElementById("result-count");
    const list = getFiltered();

    count.textContent = `${list.length} 件`;
    empty.hidden = list.length !== 0;

    container.innerHTML = list.map((n) => newsCardHtml(n)).join("");

    // 初心者解説の開閉
    container.querySelectorAll(".beginner-toggle").forEach((btn) => {
      btn.addEventListener("click", () => {
        const block = btn.nextElementSibling;
        const open = block.hasAttribute("hidden");
        if (open) { block.removeAttribute("hidden"); btn.classList.add("open"); }
        else { block.setAttribute("hidden", ""); btn.classList.remove("open"); }
      });
    });
  }

  function newsCardHtml(n) {
    const factPoints = (n.factPoints && n.factPoints.length)
      ? `<ul class="fact-points">${n.factPoints.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>`
      : "";

    const relatedCards = (n.relatedCards && n.relatedCards.length)
      ? `<p class="related-cards">関連カード: ${n.relatedCards.map((c) => `<span class="card-chip">${esc(c)}</span>`).join("")}</p>`
      : "";

    const beginner = (n.beginnerExplanation && n.beginnerExplanation.trim())
      ? `<button class="beginner-toggle">初心者向け解説を見る</button>
         <div class="beginner-block" hidden>
           <span class="block-label">初心者向け解説（AIによる補足）</span>
           <div>${esc(n.beginnerExplanation)}</div>
         </div>`
      : "";

    const related = (n.relatedArticles && n.relatedArticles.length)
      ? `<p class="related-articles">関連記事: ${n.relatedArticles.map((a) =>
          `<a href="${esc(a.url)}" target="_blank" rel="noopener">${esc(a.source)}</a>`).join(" / ")}</p>`
      : "";

    const conf = n.confidence === "要確認"
      ? `<span class="confidence-tag check">要確認</span>`
      : `<span class="confidence-tag ok">確認済</span>`;

    return `
      <article class="news-card imp-${esc(n.importance)}" id="news-${esc(n.id)}">
        <div class="news-top">
          <span class="cat-badge">${categoryEmoji(n.category)} ${esc(n.category)}</span>
          <span class="importance" title="重要度 ${esc(n.importance)}/5">${stars(n.importance)}</span>
          ${conf}
          <span class="news-date">${esc(formatDate(n.publishedAt))}</span>
        </div>
        <h3 class="news-title">${esc(n.title)}</h3>
        <p class="news-source">
          情報源: ${esc(n.source)}
          ${n.url ? `｜ <a href="${esc(n.url)}" target="_blank" rel="noopener">元記事を見る →</a>` : ""}
        </p>
        <div class="fact-block">
          <span class="block-label">事実（元記事より）</span>
          <p class="fact-summary">${esc(n.summary)}</p>
          ${factPoints}
          ${relatedCards}
        </div>
        ${beginner}
        ${related}
      </article>
    `;
  }

  // ---- 初期化 ----

  function init() {
    if (typeof NEWS_DATA === "undefined") {
      document.getElementById("news-list").innerHTML =
        '<p class="empty-message">news.js が読み込めませんでした。ファイル配置を確認してください。</p>';
      return;
    }
    renderMeta();
    renderPickup();
    renderFilters();
    renderList();

    const search = document.getElementById("search-input");
    search.addEventListener("input", (e) => {
      state.keyword = e.target.value;
      renderList();
    });
  }

  document.addEventListener("DOMContentLoaded", init);
})();
