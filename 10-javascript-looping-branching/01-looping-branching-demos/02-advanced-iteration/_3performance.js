let arr = ['a', 'b', 'c'];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

let arrLength = arr.length;
for (let i = 0; i < arrLength; i++) {
    console.log(arr[i]);
}

// arr.forEach(/* do smth */); // somewhat slower

for(let e of arr) {
    if(e === 'b') {
        // do things
        break;
    }
}

arr.find(e => e === 'b'); // find the first element

arr.some(e => e === 'b'); // true as soon as it finds the first match