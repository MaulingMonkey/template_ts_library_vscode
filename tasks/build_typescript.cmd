@setlocal
@pushd "%~dp0.."
::@set PATH=%dp0..\node_modules\.bin;%PATH%
@call tsc -b src examples tests_global
@call modularize-namespace global.js --output modular.js --namespace mmk.example
@call tsc -b tests_modular
@popd
@endlocal
