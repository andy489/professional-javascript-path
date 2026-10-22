// break — exit the loop as soon as we find what we want
const employees = ["Andrey", "Sarah", "Mina", "Andre"];

for (const employee of employees) {
  if (employee === "Mina") {
    console.log("Found Mina.");
    break;
  }

  console.log(`Checked ${employee}.`);
}

// continue — skip the current iteration and keep going
const departments = ["Engineering", "", "Marketing", "HR"];

for (const department of departments) {
  if (department === "") {
    continue;
  }

  console.log(department);
}

// Terminating loop — count is updated, so the condition eventually becomes false
let count = 0;

while (count < 3) {
  console.log(count);
  count++;
}

// Infinite loop (do not run as written) — count never increments,
// so the condition stays true forever.
/*
let runawayCount = 0;
while (runawayCount < 3) {
  console.log(runawayCount);
}
*/

// Labeled break — exit a specific outer loop from inside an inner loop
outerLoop:
for (const department of ["Engineering", "Marketing"]) {
  for (const name of ["Andrey", "Sarah"]) {
    if (department === "Marketing" && name === "Sarah") {
      break outerLoop;
    }

    console.log(`${name} in ${department}`);
  }
}