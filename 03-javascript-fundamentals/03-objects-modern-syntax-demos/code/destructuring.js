const employee = {
  firstName: "Andrey",
  lastName: "Stoev",
  department: "Engineering",
  title: "Principal Engineer"
};

// Object destructuring
const { firstName, lastName } = employee;

console.log(firstName);
console.log(lastName);

// Rename while destructuring
const { department: employeeDepartment } = employee;

console.log(employeeDepartment);

// Default values in destructuring
const { manager = "No manager assigned" } = employee;

console.log(manager);

// Array destructuring
const departments = ["Engineering", "Marketing", "HR"];

const [firstDepartment, secondDepartment] = departments;

console.log(firstDepartment);
console.log(secondDepartment);

// Skipping values in array destructuring
const [primaryDepartment, , thirdDepartment] = departments;

console.log(primaryDepartment);
console.log(thirdDepartment);

// Rest syntax with objects
const { title, ...employeeDetails } = employee;

console.log(title);
console.log(employeeDetails);

// Rest syntax with arrays
const [headDepartment, ...otherDepartments] = departments;

console.log(headDepartment);
console.log(otherDepartments);