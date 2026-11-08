import { readFileSync } from 'fs';

const wasm = readFileSync('divide.wasm');

WebAssembly.instantiate(wasm).then(result => {
    const { divide } = result.instance.exports;
    const num = 42;
    const denom = 2;
    console.log(` ${num}/${denom} is ${divide(num, denom)}`);
  });