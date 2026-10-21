/* =========================================================================
 * sources.js — 情報源の設定
 * -------------------------------------------------------------------------
 * ここを編集すれば収集対象を増減できます。
 *   type:        "official-html"（公式サイトのHTML解析） / "rss"（RSSフィード）
 *   reliability: 情報源の信頼度 1〜5（5が最も信頼できる）
 *   pokecaOnly:  true=そのサイトは全記事がポケカ関連（絞り込み不要）
 *                false=一般メディア等（keywordsに合う記事だけ採用）
 *   defaultCategory: カテゴリを特定できないときの既定カテゴリ
 * ========================================================================= */

const SOURCES = [
  {
    name: "ポケモンカード公式",
    type: "official-html",
    url: "https://www.pokemon-card.com/info/",
    base: "https://www.pokemon-card.com",
    reliability: 5,
    pokecaOnly: true
  },
  {
    name: "ポケカ飯（大会・優勝デッキ）",
    type: "rss",
    url: "https://pokekameshi.com/feed/",
    reliability: 3,
    pokecaOnly: true,
    defaultCategory: "環境"
  },
  {
    name: "攻略大百科（ポケカ）",
    type: "rss",
    url: "https://premium.gamepedia.jp/pokeca/feed/",
    reliability: 3,
    pokecaOnly: true,
    defaultCategory: "その他"
  }
];

// 一般メディア（pokecaOnly:false）で採用判定に使うキーワード
const POKECA_KEYWORDS = ["ポケカ", "ポケモンカード", "ポケモンカードゲーム"];

module.exports = { SOURCES, POKECA_KEYWORDS };
