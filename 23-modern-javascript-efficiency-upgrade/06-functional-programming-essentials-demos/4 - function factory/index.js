function waitingRoom(step) {
  let waitTime = 0;

  return function() {
    waitTime += step;
    return waitTime;
  }
}

const room = waitingRoom(7);

console.log(room());
console.log(room());
console.log(room());
console.log(room());
console.log(room());
console.log(room());
