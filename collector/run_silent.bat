@echo off
rem スケジューラから呼ぶ用（画面を出さず、ログだけ残す）
chcp 65001 >nul
cd /d "%~dp0"
echo ---- %date% %time% ---- >> collect_log.txt
node collect.js >> collect_log.txt 2>&1
