@echo off
rem === GitHub Pages へ公開（このフォルダ＝リポジトリを push）===
chcp 65001 >nul
cd /d "%~dp0"
echo === GitHub Pages へ公開します ===
git add -A
git commit -m "update: %date% %time%"
git push
echo.
echo 完了しました。数十秒〜数分でスマホからも最新が見られます。
echo （「nothing to commit」と出た場合は変更が無いだけなので問題ありません）
echo.
pause
