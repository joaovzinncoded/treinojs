    @echo off
chcp 65001 >nul
cd /d "%~dp0"
for %%f in (*.js) do (
    echo Rodando %%f...
    node "%%f"
)
echo.
pause