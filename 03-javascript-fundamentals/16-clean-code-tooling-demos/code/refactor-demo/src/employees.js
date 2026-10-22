const firstEmployee = {
  firstName: "Andrey",
  lastName: "Stoev",
  department: "Engineering"
};

const secondEmployee = {
  firstName: "Sarah",
  lastName: "Smith",
  department: "Product"
};

function formatEmployeeSummary(employee) {
  return `${employee.firstName} ${employee.lastName} - ${employee.department}`;
}

console.log(formatEmployeeSummary(firstEmployee));
console.log(formatEmployeeSummary(secondEmployee));

const minaEmployee = {
  firstName: "Mina",
  lastName: "Patel",
  department: "Engineering"
};

console.log(formatEmployeeSummary(minaEmployee));
