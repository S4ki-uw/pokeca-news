/* =========================================================================
 * news.js — ポケカAIニュースアプリ データファイル
 * -------------------------------------------------------------------------
 * このファイルはブラウザから <script> で読み込まれ、表示に使われます。
 * データの収集・整理（ブラウジング）は Claude が行い、このファイルを
 * 再生成します。更新したいときは Claude に「更新して」と依頼してください。
 *
 * 収集日: 2026-10-18 / 情報源: ポケモンカード公式ほか複数ソースで確認
 * ========================================================================= */

const NEWS_META = {
  isSample: false,
  lastUpdated: "2026-10-22T08:21:00+09:00",
  sourceNote: "ポケモンカード公式（記事直リンク）を中心に、専門メディアのRSS（大会・相場）で補完。収集はGitHub Actionsで1日3回自動実行。2026-10-22 08:21 再確認：10/21より新しいニュースはなく、追加なし（シティリーグは10/21開催分が最新で反映済み）。環境・大会・相場は変動するため要確認。"
};

/* カテゴリ: 新商品 / 新カード / 大会 / 環境 / 再販 / 販売 / ルール / レギュレーション / 相場 / その他 */

const NEWS_DATA = [
  {
    id: "2026-10-16-mega-deckset",
    title: "「スペシャルデッキセットMEGA メガオーダイル・メガカイリュー・メガゲンガー」が11月13日発売",
    url: "https://www.pokemon-card.com/products/mega/mg.html",
    source: "ポケモンカード公式",
    sourceReliability: 5,
    publishedAt: "2026-10-16",
    fetchedAt: "2026-10-18T21:50:00+09:00",
    category: "新商品",
    importance: 5,
    summary: "3種類のメガシンカexの構築済みデッキと対戦グッズがセットになった、これから始める人向けの商品。2026年11月13日（金）発売。",
    factPoints: [
      "発売日: 2026年11月13日（金）",
      "希望小売価格: 5,500円（税込）",
      "内容: 「メガオーダイルex」「メガカイリューex」「メガゲンガー」の構築済みデッキ3種（各60枚）",
      "対戦グッズ（コイン・ダメカン・プレイマット）や説明書・デッキケースなども同梱"
    ],
    beginnerExplanation: "「構築済みデッキ」は、買ってすぐ対戦できるように60枚があらかじめ組まれたデッキのことです。カードを1枚ずつ集める必要がなく、ルールガイドも入っているので、これから始める人の最初の1箱として向いています。3デッキ入りなので、友達や家族とすぐ対戦できます。",
    relatedCards: ["メガオーダイルex", "メガカイリューex", "メガゲンガー"],
    relatedArticles: [
      { source: "Gamer（内容詳細）", url: "https://www.gamer.ne.jp/news/202610160029/" },
      { source: "攻略大百科（収録カード・抽選/予約情報）", url: "https://premium.gamepedia.jp/pokeca/archives/25871" }
    ],
    confidence: "確実",
    isPickup: true
  },
  {
    id: "2026-09-16-30th-celebration",
    title: "30周年記念 拡張パック「30th CELEBRATION」発売中",
    url: "https://www.pokemon-card.com/info/",
    source: "ポケモンカード公式",
    sourceReliability: 5,
    publishedAt: "2026-09-16",
    fetchedAt: "2026-10-18T21:50:00+09:00",
    category: "新商品",
    importance: 4,
    summary: "ポケモンカードゲーム30周年を記念した拡張パック。2026年9月16日発売で、現在発売中。関連して記念映像の配信やプロモカードパック第6弾の公開など、30周年の企画が続いている。",
    factPoints: [
      "発売日: 2026年9月16日（水）",
      "30周年記念の拡張パック（現在発売中）",
      "同時期にプレミアムデッキセット（エーフィ・ブラッキー）やFUTURISTIC BOXなどの関連商品も展開"
    ],
    beginnerExplanation: "「拡張パック」は数枚入りのランダムなカードパックで、ポケカの新カードはまず拡張パックで登場します。記念パックはレアカードや特別イラストが注目されやすいですが、対戦目的なら必要なカードだけ揃えればOKで、全部集める必要はありません。",
    relatedCards: [],
    relatedArticles: [],
    confidence: "確実",
    isPickup: true
  },
  {
    id: "2026-10-09-cl2027-chiba",
    title: "「チャンピオンズリーグ2027 千葉」 2026年11月22日〜23日に開催",
    url: "https://www.pokemon-card.com/info/005666.html",
    source: "ポケモンカード公式",
    sourceReliability: 5,
    publishedAt: "2026-10-09",
    fetchedAt: "2026-10-18T21:50:00+09:00",
    category: "大会",
    importance: 4,
    summary: "公式の大規模大会「チャンピオンズリーグ2027 千葉」が2026年11月22日（日）〜23日（月・祝）に開催される。チャンピオンシップシリーズ2027シーズンの大会のひとつ。",
    factPoints: [
      "開催日: 2026年11月22日（日）〜23日（月・祝）",
      "会場: 千葉",
      "チャンピオンシップシリーズ2027シーズン（2026年9月開始）の公式大会"
    ],
    beginnerExplanation: "「チャンピオンズリーグ（CL）」は公式の大型大会で、全国からトップ級のプレイヤーが集まります。出場しなくても、どんなデッキが勝っているか（＝今の環境）を知る絶好の機会です。大会の少し前後は、強いデッキの情報が一気に増えます。",
    relatedCards: [],
    relatedArticles: [],
    confidence: "確実",
    isPickup: true
  },
  {
    id: "2026-10-18-env-dragapult",
    title: "環境トップは「ドラパルトex」 — 使用率が最上位クラス",
    url: "https://torecamap.co.jp/column/pokemon-environment/",
    source: "トレカの地図（環境Tier表）",
    sourceReliability: 3,
    publishedAt: "2026-10-17",
    fetchedAt: "2026-10-18T21:50:00+09:00",
    category: "環境",
    importance: 4,
    summary: "複数の集計サイトで「ドラパルトex」が環境トップに位置づけられている。ある集計では使用率29.3%（2026年10月2日〜16日）。※使用率は大会結果で日々変動する。",
    factPoints: [
      "ドラパルトexが使用率トップクラス（ある集計で29.3%、2026/10/2〜10/16）",
      "技「ファントムダイブ」でバトル場を攻撃しつつベンチにもダメカンを置ける",
      "軽いエネルギーで進化ターンから動けるテンポの良さが強み"
    ],
    beginnerExplanation: "「使用率（採用率）」は、大会でそのデッキ・カードがどれくらい多く使われているかの割合です。高いほど“今強い・使いやすい”目安になります。初めてガチなデッキを組むなら、使用率上位のデッキを参考にすると失敗しにくいです。ただし数字は大会結果で毎週変わるので、あくまで参考に。",
    relatedCards: ["ドラパルトex"],
    relatedArticles: [
      { source: "ポケカ飯（優勝デッキまとめ）", url: "https://pokekameshi.com/category/pokemoncard-windeckrecipe/" }
    ],
    confidence: "要確認",
    isPickup: true
  },
  {
    id: "2026-10-21-cityleague-latest",
    title: "シティリーグ（10/19〜10/21開催分）もドラパルト系が優勢 — 10/21は優勝・準優勝がボムドラパルト",
    url: "https://pokekameshi.com/cityleague20261021/",
    source: "ポケカ飯（大会結果まとめ）",
    sourceReliability: 3,
    publishedAt: "2026-10-21",
    fetchedAt: "2026-10-21T22:33:00+09:00",
    category: "環境",
    importance: 3,
    summary: "直近（2026年10月21日開催分など）のシティリーグでも、ドラパルト系デッキが優勝・入賞の中心。10月21日開催分では優勝・準優勝ともに「ボムドラパルト」だった。※大会結果は会場・日程で変動する。",
    factPoints: [
      "2026年10月21日（水）開催分: 優勝・準優勝ともにボムドラパルト",
      "同日ベスト4にドラパルト、オーロンゲ/ノココッチ",
      "直近はドラパルト系が引き続き優勢（10/20開催分のまとめも公開）",
      "※掲載は一部会場の結果に基づく"
    ],
    beginnerExplanation: "「ボムドラパルト」は、環境トップのドラパルトexを軸に、ダメカン（ダメージの目印）を盤面にばらまいて一気に倒しにいく型のデッキです。同じドラパルト系でも型がいくつかあり、大会ごとに少しずつ流行が変わります。最新の大会結果を定点観測すると、今どの型が勝っているかが見えてきます。",
    relatedCards: ["ドラパルトex", "オーロンゲ", "ノココッチ"],
    relatedArticles: [
      { source: "ポケカ飯（10/20開催分）", url: "https://pokekameshi.com/cityleague20261020/" }
    ],
    confidence: "要確認",
    isPickup: false
  },
  {
    id: "2026-10-04-cityleague",
    title: "シティリーグ（10/4開催分）はドラパルト系が最多 — ドリュウズ・ゾロアークも上位",
    url: "https://pokekameshi.com/cityleague20261004/",
    source: "ポケカ飯（大会結果まとめ）",
    sourceReliability: 3,
    publishedAt: "2026-10-04",
    fetchedAt: "2026-10-18T21:50:00+09:00",
    category: "環境",
    importance: 3,
    summary: "2026年10月4日開催のシティリーグでは、優勝・入賞ともにドラパルト系デッキが目立った。ドリュウズ（メガ含む）やゾロアークなども複数会場で上位に入った。",
    factPoints: [
      "開催日: 2026年10月4日（日）",
      "ドラパルト、ボムドラパルト、ドラパルト/ノココッチ などが優勝・入賞多数",
      "ドリュウズ、ゾロアーク、ヤドキングなども上位",
      "※掲載は一部会場の結果に基づく"
    ],
    beginnerExplanation: "「シティリーグ」は全国の店舗で開催される公式大会で、勝てばポイントがもらえます。優勝デッキの傾向を見ると、今どのデッキが安定して勝てるかが分かります。1つの大会結果だけで判断せず、複数の大会で繰り返し勝っているデッキに注目すると良いです。",
    relatedCards: ["ドラパルトex", "ドリュウズ", "ゾロアークex"],
    relatedArticles: [],
    confidence: "要確認",
    isPickup: false
  },
  {
    id: "2026-10-18-cityleague-latest",
    title: "シティリーグ（10/17〜18開催分）の優勝＆入賞デッキまとめが公開",
    url: "https://pokekameshi.com/cityleague20261018/",
    source: "ポケカ飯（大会結果まとめ）",
    sourceReliability: 3,
    publishedAt: "2026-10-18",
    fetchedAt: "2026-10-18T22:45:00+09:00",
    category: "環境",
    importance: 3,
    summary: "直近の週末（2026年10月17日・18日）開催分のシティリーグについて、優勝・入賞デッキのまとめが公開された。最新の環境チェックに使える。※個別デッキの詳細は元記事を確認。",
    factPoints: [
      "対象: 2026年10月17日（土）・18日（日）開催分",
      "オープン/ジュニア/シニアの区分ごとにまとめが公開されている"
    ],
    beginnerExplanation: "シティリーグは全国の店舗で毎週のように開催される公式大会です。週末ごとに結果が出るので、ここを定点観測すると「今どんなデッキが勝っているか」の最新の流れがつかめます。1週だけでなく数週間の傾向を見るのがコツです。",
    relatedCards: [],
    relatedArticles: [],
    confidence: "要確認",
    isPickup: false
  },
  {
    id: "gamepedia-20261015-resale-restriction",
    title: "フリマ各社でポケカの出品制限（Yahoo!フリマ・ヤフオク／メルカリ）",
    url: "https://premium.gamepedia.jp/pokeca/archives/25858",
    source: "攻略大百科（ポケカ）",
    sourceReliability: 3,
    publishedAt: "2026-10-15",
    fetchedAt: "2026-10-18T23:05:00+09:00",
    category: "販売",
    importance: 2,
    summary: "フリマ/オークション各社で、ポケカ関連の出品が制限されているとの情報。Yahoo!フリマ・ヤフオクではカートンや空箱の出品禁止、メルカリでは30th CELEBRATIONの一部商品が出品禁止の対象とされる。高需要商品の転売対策とみられる。対象商品・期間の詳細は各元記事・各サービスの公式告知を要確認。",
    factPoints: [
      "Yahoo!フリマ・ヤフオク: カートン・空箱の出品が制限される旨の報道",
      "メルカリ: 30th CELEBRATIONの一部商品が出品禁止の対象との報道",
      "対象・期間の詳細は各元記事および各サービスの公式告知を確認"
    ],
    beginnerExplanation: "人気商品は転売目的の出品が増えがちで、フリマ/オークション側が出品を制限することがあります。買うときは、こうした制限や公式の抽選・予約を利用すると、高額転売を避けやすくなります。",
    relatedCards: [],
    relatedArticles: [
      { source: "攻略大百科（メルカリ出品禁止）", url: "https://premium.gamepedia.jp/pokeca/archives/25546" }
    ],
    confidence: "要確認",
    isPickup: false
  },
  {
    id: "gamepedia-20261002-mur-price-ranking",
    title: "拡張パック「MUR」高額カードランキング・買取価格まとめ（相場）",
    url: "https://premium.gamepedia.jp/pokeca/archives/25741",
    source: "攻略大百科（ポケカ）",
    sourceReliability: 3,
    publishedAt: "2026-10-02",
    fetchedAt: "2026-10-18T23:05:00+09:00",
    category: "相場",
    importance: 1,
    summary: "専門メディアによる、拡張パック「MUR」収録カードの高額ランキング・買取価格のまとめ。相場は販売店・時期で大きく変動するため、あくまで目安。",
    factPoints: [
      "収録カードの買取価格ランキングを紹介する記事",
      "相場は変動が大きく、公式の希望小売価格とは別物"
    ],
    beginnerExplanation: "相場（中古価格）は需要で動きます。ランキングは「今どのカードが高値か」の目安になりますが、時期や店舗で大きく変わるので、売買の際は複数の店・サイトで最新価格を確認しましょう。",
    relatedCards: [],
    relatedArticles: [],
    confidence: "要確認",
    isPickup: false
  },
  {
    id: "2026-10-16-player-auth",
    title: "【重要】プレイヤーズクラブへの本人認証システム導入について",
    url: "https://www.pokemon-card.com/info/",
    source: "ポケモンカード公式",
    sourceReliability: 5,
    publishedAt: "2026-10-16",
    fetchedAt: "2026-10-18T21:50:00+09:00",
    category: "その他",
    importance: 3,
    summary: "大会参加などに使う「プレイヤーズクラブ」に本人認証システムが導入される旨が、重要なお知らせとして公式に掲載されている。大会に参加する人は内容の確認が必要。",
    factPoints: [
      "プレイヤーズクラブに本人認証システムを導入（公式の重要なお知らせ）",
      "大会エントリー等に関わるため、参加者は公式の案内を要確認"
    ],
    beginnerExplanation: "「プレイヤーズクラブ」は公式大会に申し込むためのアカウントサービスです。大会に出たい場合は登録が必要で、今回その本人確認のしくみが変わります。大会参加を考えているなら、早めに公式の案内を読んで手続きしておくと安心です。",
    relatedCards: [],
    relatedArticles: [],
    confidence: "確実",
    isPickup: false
  },
  {
    id: "2026-10-16-promo-pack6",
    title: "プロモカードパック第6弾が公開",
    url: "https://www.pokemon-card.com/info/005705.html",
    source: "ポケモンカード公式",
    sourceReliability: 5,
    publishedAt: "2026-10-16",
    fetchedAt: "2026-10-18T21:50:00+09:00",
    category: "新カード",
    importance: 2,
    summary: "対象商品の購入などで入手できる「プロモカードパック第6弾」の内容が公式で公開された。",
    factPoints: [
      "2026年10月16日に内容公開",
      "プロモカード（配布限定カード）のパック"
    ],
    beginnerExplanation: "「プロモカード」は、通常のパックでは手に入らない配布限定のカードです。商品購入やイベント参加の特典としてもらえることが多く、同じカードでも特別なイラストのことがあります。",
    relatedCards: [],
    relatedArticles: [],
    confidence: "確実",
    isPickup: false
  },
  {
    id: "2026-10-16-30th-movie",
    title: "ポケモンカードチャンネルで30周年記念映像を配信",
    url: "https://www.pokemon-card.com/info/005701.html",
    source: "ポケモンカード公式",
    sourceReliability: 5,
    publishedAt: "2026-10-16",
    fetchedAt: "2026-10-18T21:50:00+09:00",
    category: "その他",
    importance: 2,
    summary: "公式のポケモンカードチャンネルで、ポケモンカードゲーム30周年を記念した映像が配信された。",
    factPoints: [
      "ポケモンカードゲーム30周年記念の映像",
      "公式「ポケモンカードチャンネル」で配信"
    ],
    beginnerExplanation: "",
    relatedCards: [],
    relatedArticles: [],
    confidence: "確実",
    isPickup: false
  }
];
