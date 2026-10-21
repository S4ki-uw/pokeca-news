@echo off
chcp 65001 >nul
set TASKNAME=ポケカ情報収集
schtasks /Delete /TN "%TASKNAME%" /F
echo.
echo 自動収集タスク（%TASKNAME%）を解除しました。
echo.
pause
