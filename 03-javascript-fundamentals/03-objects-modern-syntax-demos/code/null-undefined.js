let manager;

console.log(manager);
console.log(typeof manager);

manager = "Sarah Smith";

console.log(manager);
console.log(typeof manager);

const ceoManager = null;

console.log(ceoManager);
console.log(typeof null);

const employee = {
  firstName: "Andrey",
  lastName: "Stoev"
};

console.log(employee.middleName);

if (employee.middleName === undefined) {
  console.log("Middle name is missing.");
}

if (manager === null || manager === undefined) {
  console.log("Manager is missing.");
}

const employeeWithContact = {
  firstName: "Andrey",
  contact: {
    email: "david@example.com"
  }
};

console.log(employeeWithContact.contact.email);

const employeeWithoutContact = {
  firstName: "Sarah"
};

// This would cause an error:
// console.log(employeeWithoutContact.contact.email);

console.log(employeeWithoutContact.contact?.email);
console.log(employeeWithoutContact.contact?.address?.city);

const displayName = employee.middleName ?? "No middle name";

console.log(displayName);

const yearsEmployed = 0;

const valueWithOr = yearsEmployed || "Unknown";
const valueWithNullish = yearsEmployed ?? "Unknown";

console.log(valueWithOr);
console.log(valueWithNullish);