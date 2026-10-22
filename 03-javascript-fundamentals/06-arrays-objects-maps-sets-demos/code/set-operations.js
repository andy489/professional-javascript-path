// Two Sets of employee skills used by every example below
const davidSkills = new Set(["JavaScript", "Node.js", "Testing", "SQL"]);
const sarahSkills = new Set(["JavaScript", "Design", "Product", "Testing"]);

// union() — every unique value from both Sets
const combinedSkills = davidSkills.union(sarahSkills);

console.log(combinedSkills);

// intersection() — values present in both Sets
const sharedSkills = davidSkills.intersection(sarahSkills);

console.log(sharedSkills);

// difference() — values in the first Set but not the second
const davidOnlySkills = davidSkills.difference(sarahSkills);
console.log(davidOnlySkills);

const sarahOnlySkills = sarahSkills.difference(davidSkills);
console.log(sarahOnlySkills);

// symmetricDifference() — values in one Set or the other, but not both
const uniqueToEitherEmployee = davidSkills.symmetricDifference(sarahSkills);

console.log(uniqueToEitherEmployee);

// isSubsetOf() / isSupersetOf() — every value in one Set appears in the other
const requiredBackendSkills = new Set(["JavaScript", "Node.js"]);

console.log(requiredBackendSkills.isSubsetOf(davidSkills));
console.log(davidSkills.isSupersetOf(requiredBackendSkills));

// isDisjointFrom() — true when the two Sets share no values
const financePermissions = new Set(["approve-budget", "view-payroll"]);
const engineeringPermissions = new Set(["deploy-service", "view-logs"]);

console.log(financePermissions.isDisjointFrom(engineeringPermissions));

// Practical example — does the user have every required permission?
const userPermissions = new Set(["view-directory", "edit-profile", "view-reports"]);
const requiredPermissions = new Set(["view-directory", "view-reports"]);

if (requiredPermissions.isSubsetOf(userPermissions)) {
  console.log("User can access the report.");
} else {
  console.log("User does not have the required permissions.");
}