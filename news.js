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
  lastUpdated: "2026-11-23T16:43:00+09:00",
  sourceNote: "ポケモンカード公式（記事直リンク）を中心に、専門メディアのRSS（大会・相場）で補完。収集はGitHub Actionsで1日3回自動実行。2026-11-23 16:43 更新：チャンピオンズリーグ2027千葉の結果発表を反映、ハドウシーカー(11/27発売)関連を補強、公式の価格改定・フィッシング注意喚起を追加。発売済みのMEGAデッキセット等はピックアップから整理。価格・収録カード・環境・相場は変動するため要確認。"
};

/* カテゴリ: 新商品 / 新カード / 大会 / 環境 / 再販 / 販売 / ルール / レギュレーション / 相場 / その他 */

const NEWS_DATA = [
  {
    id: "pc-2026-10-23-hadouseeker",
    title: "拡張パック「ハドウシーカー」が11月27日（金）発売",
    url: "https://www.pokemon-card.com/ex/m7/",
    source: "ポケモンカード公式",
    sourceReliability: 5,
    publishedAt: "2026-10-23",
    fetchedAt: "2026-10-23T15:26:00+09:00",
    category: "新商品",
    importance: 5,
    summary: "拡張パック「ハドウシーカー」が2026年11月27日（金）発売。発売を今週末に控え、収録カードリストや同時発売サプライ、買取相場予想などの情報が各メディアで出そろってきている。希望小売価格など一部未確定の情報は公式を要確認。",
    factPoints: [
      "商品名: 拡張パック「ハドウシーカー」",
      "発売日: 2026年11月27日（金）",
      "ポケモンカード公式が2026年10月23日に告知",
      "専門メディアで収録カードの一部（20種前後）や抽選・予約情報が公開され始めている（※確定情報は公式を要確認）",
      "希望小売価格などの詳細は公式商品ページを要確認"
    ],
    beginnerExplanation: "「拡張パック」は数枚入りのランダムなパックで、ポケカの新カードはまずここで登場します。発売直後は対象ポケモンやレアカードが注目されますが、対戦目的なら必要なカードだけ揃えればOKで、全部集める必要はありません。人気パックは抽選・予約になることがあるので、確実に買いたい場合は早めに情報をチェックしましょう。",
    relatedCards: [],
    relatedArticles: [
      { source: "攻略大百科（収録カードリスト・抽選/予約情報）", url: "https://premium.gamepedia.jp/pokeca/archives/25938" },
      { source: "ポケカ飯（収録カードリスト＆解説）", url: "https://pokekameshi.com/cardlistm7/" },
      { source: "攻略大百科（同時発売サプライまとめ）", url: "https://premium.gamepedia.jp/pokeca/archives/26358" },
      { source: "攻略大百科（当たりカード・買取価格予想）", url: "https://premium.gamepedia.jp/pokeca/archives/26272" }
    ],
    confidence: "確実",
    isPickup: true
  },
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
    summary: "3種類のメガシンカexの構築済みデッキと対戦グッズがセットになった、これから始める人向けの商品。2026年11月13日（金）発売（発売中）。公式では、このセットのデッキをそのまま大会に持ち込める案内も出ている。",
    factPoints: [
      "発売日: 2026年11月13日（金）／現在発売中",
      "希望小売価格: 5,500円（税込）",
      "内容: 「メガオーダイルex」「メガカイリューex」「メガゲンガー」の構築済みデッキ3種（各60枚）",
      "対戦グッズ（コイン・ダメカン・プレイマット）や説明書・デッキケースなども同梱"
    ],
    beginnerExplanation: "「構築済みデッキ」は、買ってすぐ対戦できるように60枚があらかじめ組まれたデッキのことです。カードを1枚ずつ集める必要がなく、ルールガイドも入っているので、これから始める人の最初の1箱として向いています。3デッキ入りなので、友達や家族とすぐ対戦できます。",
    relatedCards: ["メガオーダイルex", "メガカイリューex", "メガゲンガー"],
    relatedArticles: [
      { source: "Gamer（内容詳細）", url: "https://www.gamer.ne.jp/news/202610160029/" },
      { source: "攻略大百科（収録カード・抽選/予約情報）", url: "https://premium.gamepedia.jp/pokeca/archives/25871" },
      { source: "公式（デッキそのままバトルに参加）", url: "https://www.pokemon-card.com/info/005604.html" }
    ],
    confidence: "確実",
    isPickup: false
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
    isPickup: false
  },
  {
    id: "2026-10-09-cl2027-chiba",
    title: "「チャンピオンズリーグ2027 千葉」が閉幕 — 優勝・上位入賞デッキまとめが公開",
    url: "https://pokekameshi.com/cl2027chiba/",
    source: "ポケカ飯（大会結果まとめ）",
    sourceReliability: 3,
    publishedAt: "2026-11-23",
    fetchedAt: "2026-11-23T16:43:00+09:00",
    category: "大会",
    importance: 5,
    summary: "公式の大規模大会「チャンピオンズリーグ2027 千葉」が2026年11月22日（日）〜23日（月・祝）に開催され、マスター/シニア/ジュニア各リーグの優勝・上位入賞デッキのまとめが公開された。現環境のトップメタを確認できる最重要の大会。※個別の優勝デッキ・構築の詳細は各まとめを要確認。",
    factPoints: [
      "開催日: 2026年11月22日（日）〜23日（月・祝）／会場: 千葉",
      "マスター・シニア・ジュニアの各リーグで優勝・上位入賞デッキのまとめが公開",
      "チャンピオンシップシリーズ2027シーズンの公式大会",
      "※個別の優勝デッキ・採用カードの詳細は各リーグのまとめを要確認"
    ],
    beginnerExplanation: "「チャンピオンズリーグ（CL）」は全国からトップ級が集まる公式の大型大会です。ここで勝ったデッキは「今いちばん強い・信頼できる構築」の目安になります。これからデッキを組むなら、CLの上位デッキを参考にすると失敗しにくいです。大会直後は各デッキの解説記事も一気に増えます。",
    relatedCards: [],
    relatedArticles: [
      { source: "ポケカ飯（シニアリーグ結果）", url: "https://pokekameshi.com/cl2027chiba-senior/" },
      { source: "ポケカ飯（ジュニアリーグ結果）", url: "https://pokekameshi.com/cl2027chiba-junior/" },
      { source: "公式（大会告知・ライブ配信）", url: "https://www.pokemon-card.com/info/005751.html" }
    ],
    confidence: "要確認",
    isPickup: true
  },
  {
    id: "2026-10-18-env-dragapult",
    title: "環境上位は「ドラパルトex」など — 最新のTier表・CL千葉結果で確認を",
    url: "https://pokekameshi.com/strongestdeck-tire/",
    source: "ポケカ飯（環境Tier表）",
    sourceReliability: 3,
    publishedAt: "2026-11-15",
    fetchedAt: "2026-11-23T16:43:00+09:00",
    category: "環境",
    importance: 4,
    summary: "「30th CELEBRATION環境」として各メディアが環境デッキのTier表を公開している。10月時点の集計ではドラパルトexが使用率トップクラス（ある集計で29.3%、2026/10/2〜16）だったが、以降は新商品や大会で環境が動いているため、最新の順位はTier表やCL千葉の結果で確認するのが確実。※使用率・順位は日々変動する。",
    factPoints: [
      "各メディアが「30th CELEBRATION環境」のTier表を公開・更新中",
      "10月時点の集計ではドラパルトexが使用率トップクラス（ある集計で29.3%、2026/10/2〜16）",
      "その後の環境はCL千葉など最新大会の結果を要確認（固定ではない）"
    ],
    beginnerExplanation: "「Tier表（ティア表）」は、今どのデッキが強いかをランク分けした一覧です。上位のデッキほど大会で安定して勝ちやすい目安になります。初めてガチなデッキを組むなら上位から選ぶと失敗しにくいですが、順位は新弾や大きな大会のたびに変わるので、最新のものを見るのがコツです。",
    relatedCards: ["ドラパルトex"],
    relatedArticles: [
      { source: "ポケカ飯（優勝デッキまとめ）", url: "https://pokekameshi.com/category/pokemoncard-windeckrecipe/" }
    ],
    confidence: "要確認",
    isPickup: true
  },
  {
    id: "2026-10-21-cityleague-latest",
    title: "シティリーグは「2027 シーズン2」がスタート — 11月中旬開催分までまとめ公開",
    url: "https://pokekameshi.com/cityleague20261115/",
    source: "ポケカ飯（大会結果まとめ）",
    sourceReliability: 3,
    publishedAt: "2026-11-15",
    fetchedAt: "2026-11-23T16:43:00+09:00",
    category: "大会",
    importance: 3,
    summary: "店舗開催の公式大会「シティリーグ」は2027シーズン2がスタート（公式告知）。11月14日・15日開催分など、週末ごとの優勝・入賞デッキまとめが各リーグ区分で公開されており、最新の環境チェックに使える。※個別の優勝デッキは各開催日のまとめを要確認。",
    factPoints: [
      "「シティリーグ2027 シーズン2」がポケモンカードジムでスタート（公式告知・2026/10/30）",
      "11月14日（土）・15日（日）開催分の優勝・入賞デッキまとめが公開",
      "オープン/ジュニア/シニアの区分ごとにまとめあり",
      "※個別の優勝デッキは各開催日のまとめを要確認／掲載は一部会場の結果に基づく"
    ],
    beginnerExplanation: "「シティリーグ」は全国の店舗で毎週のように開かれる公式大会で、勝つとポイントがもらえます。週末ごとに結果が出るので、ここを定点観測すると「今どんなデッキが勝っているか」の最新の流れがつかめます。1週だけでなく数週間の傾向で見るのがコツです。",
    relatedCards: [],
    relatedArticles: [
      { source: "ポケカ飯（11/14開催分）", url: "https://pokekameshi.com/cityleague20261114/" },
      { source: "公式（シティリーグ2027 シーズン2開始）", url: "https://www.pokemon-card.com/info/005737.html" }
    ],
    confidence: "要確認",
    isPickup: false
  },
  {
    id: "pc-trademark-20261029",
    title: "新商品名の商標登録を確認か「マグマの鼓動」「イナズマの衝撃」「オーロラの波紋」など（※未確定）",
    url: "https://premium.gamepedia.jp/pokeca/archives/25994",
    source: "攻略大百科（ポケカ）",
    sourceReliability: 3,
    publishedAt: "2026-10-29",
    fetchedAt: "2026-10-29T10:54:00+09:00",
    category: "その他",
    importance: 2,
    summary: "専門メディアにより、「マグマの鼓動」「イナズマの衝撃」「オーロラの波紋」などの名称が商標登録されたと報じられている。将来の新弾名の候補として注目されているが、ポケモンカード公式からの正式発表ではなく、収録内容などは予想段階。",
    factPoints: [
      "複数の名称が商標登録されたとメディアが報道",
      "将来の拡張パック名の候補として話題になっている",
      "※ポケモンカード公式の正式発表ではない／収録カードは予想段階で未確定"
    ],
    beginnerExplanation: "「商標登録」は、会社が名前やロゴを先に押さえておく手続きです。新商品に使われることが多いですが、登録しただけで必ず発売されるわけではありません。正式な発売情報は必ず公式発表を待ちましょう。",
    relatedCards: [],
    relatedArticles: [],
    confidence: "要確認",
    isPickup: false
  },
  {
    id: "pc-2026-11-06-price-revision",
    title: "【公式】一部商品の価格改定のお知らせ",
    url: "https://www.pokemon-card.com/info/005755.html",
    source: "ポケモンカード公式",
    sourceReliability: 5,
    publishedAt: "2026-11-06",
    fetchedAt: "2026-11-23T16:43:00+09:00",
    category: "販売",
    importance: 3,
    summary: "ポケモンカードゲームの一部商品について、価格改定（値上げ）のお知らせが公式から出ている。対象商品・改定時期・改定後価格の詳細は公式の告知を要確認。",
    factPoints: [
      "ポケモンカード公式が一部商品の価格改定を告知（2026/11/6）",
      "対象商品・時期・改定後価格の詳細は公式ページを要確認"
    ],
    beginnerExplanation: "「価格改定」はメーカー希望小売価格が変わることで、多くは値上げを指します。対象商品を買う予定があるなら、いつから・いくらになるのかを公式の案内で確認しておくと安心です。",
    relatedCards: [],
    relatedArticles: [],
    confidence: "確実",
    isPickup: false
  },
  {
    id: "pc-2026-11-20-phishing-alert",
    title: "【公式・注意喚起】ポケカを装ったフィッシング（詐欺）に注意",
    url: "https://www.pokemon-card.com/info/005767.html",
    source: "ポケモンカード公式",
    sourceReliability: 5,
    publishedAt: "2026-11-20",
    fetchedAt: "2026-11-23T16:43:00+09:00",
    category: "その他",
    importance: 2,
    summary: "ポケモンカードゲームのキャンペーン等を装ったフィッシング（詐欺）メール・サイトへの注意喚起が、公式から重ねて出されている。公式を名乗る不審な連絡には注意し、個人情報やログイン情報を入力しないよう呼びかけられている。",
    factPoints: [
      "ポケカ公式がフィッシング詐欺への注意喚起を掲載（2026/11/20、11/6にも関連告知）",
      "公式を装ったメール・サイトで個人情報やログイン情報をだまし取る手口に注意",
      "不審なリンクは開かず、公式サイトの案内を確認するよう呼びかけ"
    ],
    beginnerExplanation: "「フィッシング詐欺」は、公式そっくりの偽メールや偽サイトでIDやパスワード、カード情報を盗む手口です。「当選」「限定販売」などで急かしてくるのが典型。リンクは安易に開かず、公式サイトを自分で開いて確認するのが安全です。",
    relatedCards: [],
    relatedArticles: [
      { source: "公式（キャンペーンを装った詐欺メールへの注意）", url: "https://www.pokemon-card.com/info/005756.html" }
    ],
    confidence: "確実",
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
