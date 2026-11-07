function waitingRoom() {
  let waitTime = 0;

  return {
    refresh: function() {
      waitTime++;
    },
    getState: function() {
      return waitTime;
    }
  }
}

const room = waitingRoom();
room.refresh();
room.refresh();

console.log(room.getState());
