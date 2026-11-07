const waitingRoom = new Set();

waitingRoom.add(1);

waitingRoom.add(42);

waitingRoom.add(99);

console.log(`${waitingRoom.size} users in waiting room.`);

waitingRoom.add(42);

console.log(`${waitingRoom.size} users in waiting room.`);

waitingRoom.delete(42);

for (const user of waitingRoom) {
    console.log(user);
}