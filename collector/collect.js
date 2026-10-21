/* =========================================================================
 * collect.js — ポケカ情報 自動収集ツール（Node.js・追加インストール不要）
 * -------------------------------------------------------------------------
 * 役割: 公式サイトのHTMLと専門メディアのRSSから「ニュースの候補」を集め、
 *       raw_news.json として書き出す。AIトークンは一切使わない。
 *
 * 使い方:  node collect.js
 *          （Windowsは run.bat をダブルクリックでもOK）
 *
 * 集めるのは「タイトル・日付・カテゴリ・リンク・情報源」まで。
 * 要約や初心者向け解説（AIの担当）は付けない。
 * 生成された raw_news.json をもとに、Claudeに「更新して」と頼むと、
 * 新着ぶんだけAIが要約して news.js を更新する（＝トークン節約）。
 * ========================================================================= */

const fs = require("fs");
const path = require("path");
const { SOURCES, POKECA_KEYWORDS } = require("./sources.js");

// ---- 設定 ----
const RECENT_DAYS = 60;          // 何日前までのニュースを対象にするか
const MAX_PER_SOURCE = 40;       // 1情報源あたりの最大件数
const OUTPUT = path.join(__dirname, "..", "raw_news.json"); // 成果物直下に出力
const NEWS_JS = path.join(__dirname, "..", "news.js");       // 既存の要約済みデータ
const USER_AGENT =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 " +
  "(KHTML, like Gecko) Chrome/125.0 Safari/537.36";

// 当アプリの10カテゴリ
const CATEGORIES = ["新商品","新カード","大会","環境","再販","販売","ルール","レギュレーション","相場","その他"];

// ---- ユーティリティ ----

async function fetchText(url) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 20000);
  try {
    const res = await fetch(url, {
      headers: { "User-Agent": USER_AGENT, "Accept-Language": "ja,en;q=0.8" },
      signal: ctrl.signal
    });
    if (!res.ok) throw new Error("HTTP " + res.status);
    return await res.text();
  } finally {
    clearTimeout(timer);
  }
}

function decodeEntities(s) {
  if (!s) return "";
  return s
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/<[^>]+>/g, "")            // 残ったタグを除去
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;|&apos;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(+n))
    .replace(/\s+/g, " ")
    .trim();
}

function toISODate(input) {
  // "2026.10.16" / "2026.10.9" 形式
  const m = String(input).match(/(\d{4})[.\-/](\d{1,2})[.\-/](\d{1,2})/);
  if (m) {
    const [, y, mo, d] = m;
    return `${y}-${mo.padStart(2, "0")}-${d.padStart(2, "0")}`;
  }
  // RSSの pubDate 等
  const dt = new Date(input);
  if (!isNaN(dt.getTime())) {
    // 日本時間の日付に変換
    return dt.toLocaleDateString("sv-SE", { timeZone: "Asia/Tokyo" });
  }
  return null;
}

function shortHash(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) | 0;
  return Math.abs(h).toString(36).slice(0, 6);
}

// タイトル＋ラベルからカテゴリを推定
function guessCategory(title, officialLabel, defaultCategory) {
  const t = title || "";
  const rules = [
    [/再販|再出荷|再入荷/, "再販"],
    [/レギュレーション/, "レギュレーション"],
    [/ルール|裁定|エラッタ|Q&A/, "ルール"],
    [/シティリーグ|チャンピオンズリーグ|チャンピオンシップ|ジムバトル|スクランブルバトル|大会|シーズン|WCS|CL20/, "大会"],
    [/優勝|入賞|デッキレシピ|採用率|環境|Tier|ティア/, "環境"],
    [/相場|高騰|買取|価格推移/, "相場"],
    [/カードリスト|収録カード|新カード|カード公開|公開！/, "新カード"],
    [/発売|拡張パック|強化拡張|スターター|デッキセット|BOX|ボックス|ハイクラス|プロモ/, "新商品"],
    [/販売|予約|抽選|店頭/, "販売"]
  ];
  for (const [re, cat] of rules) if (re.test(t)) return cat;
  // 公式ラベルからのマッピング
  const map = { "商品": "新商品", "イベント": "大会", "トレーナーズ": "大会", "その他": "その他" };
  if (officialLabel && map[officialLabel]) return map[officialLabel];
  return defaultCategory || "その他";
}

// ---- 公式サイト(HTML)の解析 ----
function parseOfficialHtml(html, source) {
  const items = [];
  // <a ... class="...List_item_inner..." ...>...</a> を抽出
  const anchorRe = /<a\b([^>]*\bclass="[^"]*List_item_inner[^"]*"[^>]*)>([\s\S]*?)<\/a>/g;
  let m;
  while ((m = anchorRe.exec(html)) !== null) {
    const attrs = m[1];
    const inner = m[2];
    const hrefM = attrs.match(/href="([^"]*)"/);
    if (!hrefM) continue;
    let href = hrefM[1];
    // タイトル（List_title）→ なければ img alt
    let title = "";
    const titleM = inner.match(/class="List_title[^"]*"[^>]*>([\s\S]*?)<\/[a-z]+>/i);
    if (titleM) title = decodeEntities(titleM[1]);
    if (!title) {
      const altM = inner.match(/<img[^>]*\balt="([^"]*)"/i);
      if (altM) title = decodeEntities(altM[1]);
    }
    if (!title) continue;
    // カテゴリ
    const catM = inner.match(/class="Calendar_Label[^"]*"[^>]*>([\s\S]*?)<\/[a-z]+>/i);
    const officialLabel = catM ? decodeEntities(catM[1]) : "";
    // 日付
    const dateM = inner.match(/class="Date[^"]*"[^>]*>([\s\S]*?)<\/[a-z]+>/i);
    const publishedAt = dateM ? toISODate(decodeEntities(dateM[1])) : null;
    // URL絶対化
    if (href.startsWith("/")) href = source.base + href;
    else if (!/^https?:/i.test(href)) href = source.base + "/" + href;
    // ホームや空リンクは除外
    if (href === source.base + "/" || /news-detail\?/.test(href)) {
      // ルーター形式はIDだけ拾って記事URLに寄せる
      const idm = href.match(/id=(\d+)/);
      if (idm) href = `${source.base}/info/${idm[1].padStart(6, "0")}.html`;
      else continue;
    }
    const idm = href.match(/\/info\/(\d+)\.html/);
    const id = idm ? "pc-" + idm[1] : "pc-" + (publishedAt || "") + "-" + shortHash(title);
    items.push({
      id, title, url: href,
      source: source.name, sourceReliability: source.reliability,
      publishedAt,
      category: guessCategory(title, officialLabel, null),
      officialLabel: officialLabel || null
    });
  }
  return items;
}

// ---- RSSの解析 ----
function parseRss(xml, source) {
  const items = [];
  const itemRe = /<item\b[^>]*>([\s\S]*?)<\/item>/g;
  let m;
  while ((m = itemRe.exec(xml)) !== null) {
    const block = m[1];
    const pick = (tag) => {
      const r = block.match(new RegExp(`<${tag}\\b[^>]*>([\\s\\S]*?)</${tag}>`, "i"));
      return r ? decodeEntities(r[1]) : "";
    };
    const title = pick("title");
    let link = pick("link");
    if (!link) {
      const lm = block.match(/<link[^>]*href="([^"]*)"/i); // Atom形式
      if (lm) link = lm[1];
    }
    if (!title || !link) continue;
    const publishedAt = toISODate(pick("pubDate") || pick("dc:date") || pick("published") || pick("updated"));
    const host = (() => { try { return new URL(link).hostname.replace(/^www\./, ""); } catch { return "rss"; } })();
    const id = host + "-" + (publishedAt || "") + "-" + shortHash(title);
    items.push({
      id, title, url: link,
      source: source.name, sourceReliability: source.reliability,
      publishedAt,
      category: guessCategory(title, null, source.defaultCategory),
      officialLabel: null
    });
  }
  return items;
}

// ---- 既存 news.js の既知ID・URLを取得（新着判定用） ----
// 新着判定はURL一致を基本にする（IDの付け方に依存せず取りこぼしにくい）
function loadKnown() {
  const ids = new Set();
  const urls = new Set();
  try {
    const code = fs.readFileSync(NEWS_JS, "utf8");
    let m;
    const idRe = /\bid:\s*"([^"]+)"/g;
    while ((m = idRe.exec(code)) !== null) ids.add(m[1]);
    const urlRe = /\burl:\s*"([^"]+)"/g;
    while ((m = urlRe.exec(code)) !== null) urls.add(m[1]);
  } catch { /* news.js が無ければ全て新着扱い */ }
  return { ids, urls };
}

// ---- メイン ----
async function main() {
  console.log("=== ポケカ情報 収集ツール ===");
  const known = loadKnown();
  const recentLimit = new Date(Date.now() - RECENT_DAYS * 86400000)
    .toLocaleDateString("sv-SE", { timeZone: "Asia/Tokyo" });

  let all = [];
  const perSource = {};

  for (const src of SOURCES) {
    process.stdout.write(`\n[取得] ${src.name} ... `);
    try {
      const text = await fetchText(src.url);
      let items = src.type === "official-html"
        ? parseOfficialHtml(text, src)
        : parseRss(text, src);

      // ポケカ関連フィルタ（一般メディア用）
      if (!src.pokecaOnly) {
        items = items.filter((it) => POKECA_KEYWORDS.some((k) => it.title.includes(k)));
      }
      // 日付で絞り込み（日付不明は残す）＋ 上限
      items = items
        .filter((it) => !it.publishedAt || it.publishedAt >= recentLimit)
        .slice(0, MAX_PER_SOURCE);

      perSource[src.name] = items.length;
      all = all.concat(items);
      console.log(`${items.length} 件`);
    } catch (e) {
      perSource[src.name] = "取得失敗: " + e.message;
      console.log("失敗 (" + e.message + ")");
    }
  }

  // 重複排除（同一URL or 同一タイトル）
  const seen = new Set();
  const deduped = [];
  for (const it of all) {
    const key = (it.url || "") + "|" + it.title;
    const tkey = "T|" + it.title.replace(/\s/g, "");
    if (seen.has(key) || seen.has(tkey)) continue;
    seen.add(key); seen.add(tkey);
    it.isNew = !known.urls.has(it.url) && !known.ids.has(it.id); // 既存news.jsに無ければ新着
    deduped.push(it);
  }

  // 新しい順（日付不明は末尾）
  deduped.sort((a, b) => {
    if (!a.publishedAt && !b.publishedAt) return 0;
    if (!a.publishedAt) return 1;
    if (!b.publishedAt) return -1;
    return b.publishedAt.localeCompare(a.publishedAt);
  });

  const output = {
    meta: {
      collectedAt: new Date().toISOString(),
      total: deduped.length,
      newCount: deduped.filter((x) => x.isNew).length,
      perSource
    },
    items: deduped
  };

  fs.writeFileSync(OUTPUT, JSON.stringify(output, null, 2), "utf8");

  console.log("\n--------------------------------------");
  console.log(`合計 ${deduped.length} 件（うち新着 ${output.meta.newCount} 件）を収集`);
  console.log("出力先: " + OUTPUT);
  console.log("次のステップ: Claudeに「更新して」と頼むと、新着ぶんだけ要約して news.js を更新します。");
}

// 直接実行時のみ収集を開始（テスト時は関数だけ使える）
if (require.main === module) {
  main().catch((e) => {
    console.error("エラー:", e);
    process.exit(1);
  });
}

module.exports = { parseOfficialHtml, parseRss, guessCategory, toISODate, decodeEntities };
