# 出先（スマホ）から見る ― GitHub Pages 公開手順

このアプリ（`成果物` フォルダ）をGitHubに置き、**GitHub Pages**で公開すると、
`https://ユーザー名.github.io/リポジトリ名/` のURLでスマホからいつでも見られます。無料です。

> 仕組み：`成果物` フォルダをGitHubのリポジトリにして、更新時に `publish.bat` で push すると、
> GitHub Pagesが自動で最新を配信します。

---

## 事前に必要なもの

1. **GitHubアカウント**（無料）… 無ければ https://github.com/signup で作成
2. **Git for Windows** … 無ければ https://git-scm.com/download/win をインストール（初期設定は既定のままでOK）

> 確認方法（コマンドプロンプトで）: `git --version` でバージョンが出ればOK。

---

## 初回だけのセットアップ

### STEP 1. GitHubでリポジトリを作る
1. https://github.com/new を開く
2. Repository name: `pokeca-news`（任意）
3. **Public** を選択（GitHub Pagesの無料枠はPublic。中身はポケカ情報なので実害は小さいです）
4. 「Create repository」

作成後に表示される `https://github.com/ユーザー名/pokeca-news.git` を控えます。

### STEP 2. 成果物フォルダをリポジトリにして初回アップロード
コマンドプロンプトで、`成果物` フォルダの中で以下を実行（`ユーザー名`は置き換え）:

```
cd "C:\Users\masac\OneDrive\ドキュメント\ポケカアプリ\成果物"
git init
git add -A
git commit -m "init: pokeca news app"
git branch -M main
git remote add origin https://github.com/ユーザー名/pokeca-news.git
git push -u origin main
```

> 初回の `git push` でGitHubログインを求められます（ブラウザ認証、またはトークン）。
> 画面の案内に従ってログインすれば、以降は自動で認証されます（Git Credential Manager）。

### STEP 3. GitHub Pages を有効化
1. リポジトリの **Settings** → 左メニュー **Pages**
2. 「Build and deployment」→ Source: **Deploy from a branch**
3. Branch: **main** / フォルダ: **/ (root)** → **Save**
4. 1〜2分待つと、上部に公開URL `https://ユーザー名.github.io/pokeca-news/` が表示されます

→ このURLをスマホのブラウザで開けばOK。ホーム画面に追加するとアプリのように使えます。

---

## 2回目以降の更新（かんたん）

```
① collector\run.bat（または自動収集）   … raw_news.json を最新に
② Claudeに「更新して」                  … news.js を更新（要約つき）
③ 成果物\publish.bat をダブルクリック    … GitHubへ push → サイトに反映
```

> ③は `git add → commit → push` を自動で行うスクリプトです。数十秒〜数分でスマホ側も最新になります。
> PCがClaudeとつながっている時は、「更新して公開まで」と言っていただければ私がpushまで代行できます。

---

## 注意点

- **公開URLは「知っていれば誰でも見られる」状態**です（検索エンジンには載りにくいですが、非公開ではありません）。個人情報は載せないでください（本アプリはポケカ公開情報のみなので問題ありません）。
- `成果物` はOneDrive配下にあります。Git管理とOneDrive同期は基本両立しますが、まれに競合することがあります。気になる場合は、リポジトリだけOneDrive外（例: `C:\pokeca-news`）に置く構成にもできます（ご希望なら切り替えます）。
- `collector\collect_log.txt` などの一時ファイルは `.gitignore` で公開対象から除外済みです。
