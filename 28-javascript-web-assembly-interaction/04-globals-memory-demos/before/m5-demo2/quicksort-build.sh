/usr/local/opt/llvm/bin/clang --target=wasm32 -c quicksort.c -o quicksort.o
/usr/local/opt/llvm/bin/wasm-ld  quicksort.o  --stack-first  --no-entry --export-all  -o quicksort.wasm 
#-z stack-size=$[8 * 1024 * 1024]
#emcc quicksort.c -o quicksort2.wasm -s STANDALONE_WASM -s EXPORT_ALL=1 -Wl,--no-entry