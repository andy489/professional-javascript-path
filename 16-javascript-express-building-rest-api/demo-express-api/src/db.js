// In-memory "database" — an array of book objects with auto-incrementing IDs.
// Each restart of the server resets data (that's intentional for learning).

let books = [
  { id: 1, title: "The Pragmatic Programmer", author: "Hunt & Thomas", year: 1999 },
  { id: 2, title: "Clean Code", author: "Robert C. Martin", year: 2008 },
  { id: 3, title: "You Don't Know JS", author: "Kyle Simpson", year: 2015 },
];

// Tracks the highest ID so far — used when creating new books
let nextId = books.length + 1;

function getAll() {
  return books;
}

function getById(id) {
  return books.find((b) => b.id === id) ?? null;
}

function create(data) {
  const book = { id: nextId++, ...data };
  books.push(book);
  return book;
}

function update(id, data) {
  const index = books.findIndex((b) => b.id === id);
  if (index === -1) return null;
  books[index] = { ...books[index], ...data, id }; // id is never overwritten
  return books[index];
}

function remove(id) {
  const index = books.findIndex((b) => b.id === id);
  if (index === -1) return false;
  books.splice(index, 1);
  return true;
}

module.exports = { getAll, getById, create, update, remove };
