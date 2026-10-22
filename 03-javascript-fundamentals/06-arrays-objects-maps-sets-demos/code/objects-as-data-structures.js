// Model a record with named fields
const employee = {
  id: "E-1001",
  firstName: "Andrey",
  lastName: "Stoev",
  department: "Engineering",
  title: "Principal Engineer",
  isActive: true
};

console.log(employee);

// Nested objects — data has structure inside structure
const employeeWithContact = {
  id: "E-1001",
  firstName: "Andrey",
  lastName: "Stoev",
  contact: {
    email: "david@example.com",
    phone: "555-0100"
  },
  location: {
    city: "Atlanta",
    state: "GA"
  }
};

console.log(employeeWithContact.contact.email);
console.log(employeeWithContact.location.city);

// Optional chaining (?.) — safely access nested values that may be missing
const employeeWithoutContact = {
  id: "E-1002",
  firstName: "Sarah",
  lastName: "Smith"
};

// Uncommenting the next line would throw TypeError: Cannot read property 'email' of undefined.
// console.log(employeeWithoutContact.contact.email);

console.log(employeeWithoutContact.contact?.email);

// Optional chaining + nullish coalescing — supply a fallback for missing data
const email = employeeWithoutContact.contact?.email ?? "No email on file";

console.log(email);

// Plain assignment shares the same reference — it is not a copy
const employeeCopy = employee;

console.log(employeeCopy === employee);

// Shallow copy with spread — new top-level object, same nested references
const updatedEmployee = {
  ...employee,
  title: "Senior Principal Engineer"
};

console.log(updatedEmployee);
console.log(employee);

// Shallow copy gotcha — mutating the nested contact also changes the original
const copiedEmployee = {
  ...employeeWithContact
};

copiedEmployee.contact.email = "new-email@example.com";

console.log(employeeWithContact.contact.email);

// Safely update nested data — also spread the nested object
const safelyUpdatedEmployee = {
  ...employeeWithContact,
  contact: {
    ...employeeWithContact.contact,
    email: "safe-update@example.com"
  }
};

console.log(safelyUpdatedEmployee.contact.email);
console.log(employeeWithContact.contact.email);