
// emcc import-export.c  -sEXPORTED_FUNCTIONS=_useImports -sERROR_ON_UNDEFINED_SYMBOLS=0 --no-entry --pre-js import-export-imports.js --shell-file import-export-shell.html -o import-export-output.html
extern void importFunctionOne(int i);
extern void importFunctionTwo(int i);

void useImports() {
  importFunctionOne(1);
  importFunctionTwo(2);
}