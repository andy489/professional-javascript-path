function waitingRoom() {
  let waitTime = 0;

  return function() {
    return ++waitTime;
  }
}

const room = waitingRoom();

console.log(room());
console.log(room());
