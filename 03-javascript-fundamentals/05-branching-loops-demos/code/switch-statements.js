const employee = {
  firstName: "Andrey",
  department: "Engineering"
};

// Basic switch with case, break, and default
switch (employee.department) {
  case "Engineering":
    console.log("Meet in Building 1.");
    break;
  case "Marketing":
    console.log("Meet in Building 2.");
    break;
  case "HR":
    console.log("Meet in Building 1.");
    break;
  default:
    console.log("Meet in Building 3.");
} 

// Why break matters — without it, every case below the match also runs
switch (employee.department) {
  case "Engineering":
    console.log("Engineering selected.");
  case "Marketing":
    console.log("Marketing selected.");
  default:
    console.log("Default selected.");
}

// Intentional fall-through — Engineering and HR share the same block
switch (employee.department) {
  case "Engineering":
  case "HR":
    console.log("Meet in Building 1.");
    break;
  case "Marketing":
    console.log("Meet in Building 2.");
    break;
  default:
    console.log("Meet in Building 3.");
}

// Switch is clearer for one value against a list of exact matches
const command = "add";

switch (command) {
  case "add":
    console.log("Add command.");
    break;
  case "list":
    console.log("List command.");
    break;
  case "delete":
    console.log("Delete command.");
    break;
  default:
    console.log("Unknown command.");
}

// if/else is clearer for ranges or compound conditions
const eligibilityCheck = {
  numberOfYearsEmployed: 12,
  isActive: true
};

if (eligibilityCheck.numberOfYearsEmployed >= 10 && eligibilityCheck.isActive) {
  console.log("Eligible.");
}

