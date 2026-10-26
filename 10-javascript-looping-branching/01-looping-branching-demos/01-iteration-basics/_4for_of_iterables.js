console.log("Strings:");
const string = "abc";
for(const letter of string) {
    console.log(letter);
}

console.log("Set:");
const set = new Set(["a", "b", "c"]);
for(const element of set) {
    console.log(element);
}

console.log("Map:");
const map = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
]);

for(const entry of map) {
    console.log(entry);
}

for(const entry of map) {
    console.log(`At key ${entry[0]} we have value ${entry.at(1)}`);
}

console.log("Keys:");
for(const key of map.keys()) {
    console.log(key);
}

console.log("Values:");
for(const value of map.values()) {
    console.log(value);
}