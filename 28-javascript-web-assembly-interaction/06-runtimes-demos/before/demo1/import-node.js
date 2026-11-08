import { readFileSync } from 'fs';

const wasm = readFileSync('import.wasm');

WebAssembly.instantiate(wasm)
.then(result => {
    const { useImports } = result.instance.exports;
    useImports();
})