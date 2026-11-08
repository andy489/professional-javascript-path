import { readFileSync } from 'fs';

const wasm = readFileSync('import.wasm');

function importFunctionOne(param){
    console.log(`importOne called with ${param}`);
}

function importFunctionTwo(param) {
    console.log(`importTwo called with ${param}`);
}

const importObject = { importModule: { importFunctionOne, importFunctionTwo } };

WebAssembly.instantiate(wasm, importObject)
.then(result => {
    const { useImports } = result.instance.exports;
    useImports();
})