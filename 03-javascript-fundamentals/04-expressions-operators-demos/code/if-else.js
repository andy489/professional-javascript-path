const employee = {
  firstName: "Andrey",
  lastName: "Stoev",
  department: "Engineering",
  numberOfYearsEmployed: 7,
  isActive: true
};

// Basic if statement
if (employee.isActive) {
  console.log("Employee should appear in the directory.");
} 

// if/else
if (employee.isActive) {
  console.log("Employee should appear in the directory.");
} else {
  console.log("Employee should be hidden from the default directory view.");
}

// else if chain — assign a badge color based on years of service
let badgeColor;

if (employee.numberOfYearsEmployed < 5) {
  badgeColor = "blue";
} else if (employee.numberOfYearsEmployed < 10) {
  badgeColor = "yellow";
} else if (employee.numberOfYearsEmployed < 15) {
  badgeColor = "red";
} else if (employee.numberOfYearsEmployed < 20) {
  badgeColor = "purple";
} else {
  badgeColor = "silver";
}

console.log(badgeColor);

// Compound condition — every check must be true
if (
  employee.isActive &&
  employee.department === "Engineering" &&
  employee.numberOfYearsEmployed >= 5
) {
  console.log("Employee meets the engineering recognition criteria.");
}

// Guard clause — exit early so the main branch reads top to bottom
function printEmployeeBadge(employee) {
  if (!employee.isActive) {
    console.log("Inactive employees do not receive active badges.");
    return;
  }

  console.log(`${employee.firstName} receives an active employee badge.`);
}

printEmployeeBadge(employee);

// Nested conditional (harder to read)
if (employee.isActive) {
  if (employee.department === "Engineering") {
    if (employee.numberOfYearsEmployed >= 5) {
      console.log("Employee qualifies (nested check).");
    }
  }
}

// Refactored to a single compound condition (same result as the nested version)
if (
  employee.isActive &&
  employee.department === "Engineering" &&
  employee.numberOfYearsEmployed >= 5
) {
  console.log("Employee qualifies (compound check).");
}