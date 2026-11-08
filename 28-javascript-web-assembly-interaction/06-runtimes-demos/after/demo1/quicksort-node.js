import { readFileSync } from 'fs';
import employees from './employees.json' assert { type: 'json' };

const wasm = readFileSync('quicksort.wasm');

WebAssembly.instantiate(wasm).then(result => {
    const { quicksort, memory } = result.instance.exports;
    const sortArray = employees.slice(0, 10000).map(item => { return item.emp_no });
    const carray = new Int32Array(memory.buffer, 0, sortArray.length);
    carray.set(sortArray);
    console.log(sortArray.slice(0,10));
    quicksort(carray.byteOffset, 0, sortArray.length - 1);
    console.log(carray.slice(0, 10));
  });