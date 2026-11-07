const userProfile = new WeakMap();

let user = { name: 'Tom' };

userProfile.set(
    user,
    { lastSeen: new Date(), language: 'en' }
);

console.log(`${ userProfile.size } user(s) have a profile.`);

const waitingRoom = new WeakSet();

waitingRoom.add(user);
waitingRoom.add(user);

console.log(`Profile for user: ${ userProfile.has(user) }.`);
console.log(`User in waiting room: ${ waitingRoom.has(user) }.`);

user = null;

console.log(`Profile for user: ${ userProfile.has(user) }.`);
console.log(`User in waiting room: ${ waitingRoom.has(user) }.`);
