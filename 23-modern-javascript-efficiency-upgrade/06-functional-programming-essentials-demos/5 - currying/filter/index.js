const users = [
    { id: 1, name: 'Kim' },
    { id: 2, name: 'Cyle' },
    { id: 3, name: 'Tom' },
]

const idFilter = (id) => (user) => user.id === id;

const filterById = (elements, id) => elements.filter(idFilter(id));

console.log(filterById(users, 1));
