@echo off
chcp 65001 >nul
cd /d "%~dp0"
set TASKNAME=ポケカ情報収集
rem 毎日 08:00 に収集を自動実行するタスクを登録（現在のユーザー権限で登録＝管理者不要）
schtasks /Create /SC DAILY /TN "%TASKNAME%" /TR "\"%~dp0run_silent.bat\"" /ST 08:00 /F
echo.
if %errorlevel%==0 (
  echo [成功] 毎日 08:00 に自動収集するタスクを登録しました。
  echo        タスク名: %TASKNAME%
  echo        時刻を変える  : 「タスク スケジューラ」で %TASKNAME% を編集
  echo        自動収集をやめる: delete_schedule.bat を実行
) else (
  echo [失敗] 登録できませんでした。手動の場合は「収集ツールの使い方.md」の手順をご覧ください。
)
echo.
pause
