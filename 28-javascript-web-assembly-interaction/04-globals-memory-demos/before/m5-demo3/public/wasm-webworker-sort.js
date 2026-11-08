
self.onmessage = event => {
    const { module, memory, arrayToSort, start } = event.data;
    const instance = new WebAssembly.Instance(module, { env: { memory }});
    const offset =  (start % 2 ) !== 0 ? start+1: start;
    const sortedArray = new Int32Array(memory.buffer, offset*Int32Array.BYTES_PER_ELEMENT, arrayToSort.length);
    sortedArray.set(arrayToSort);    
    instance.exports.quicksort(sortedArray.byteOffset, 0, sortedArray.length - 1);
    self.postMessage({ array: sortedArray });
  };
  
  