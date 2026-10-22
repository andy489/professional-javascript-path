// Create a promise — executor receives resolve and reject callbacks
const employeePromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve({ firstName: "Andrey", department: "Engineering" });
  }, 1000);
});

// then() — runs the callback with the resolved value
employeePromise.then((employee) => {
  console.log(employee);
});

// Rejection — call reject() to signal failure; catch() handles it
const failingPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error("Failed to load employee."));
  }, 1000);
});

failingPromise.catch((error) => {
  console.error(error.message);
});

// finally() — runs whether the promise resolved or rejected
employeePromise
  .then((employee) => {
    console.log(employee);
  })
  .catch((error) => {
    console.error(error.message);
  })
  .finally(() => {
    console.log("Employee load attempt finished.");
  });

// Promise chaining — each then() can return a value or another promise
function loadEmployee() {
  return Promise.resolve({
    firstName: "Andrey",
    lastName: "Stoev",
    department: "Engineering"
  });
}

loadEmployee()
  .then((employee) => {
    return `${employee.firstName} ${employee.lastName}`;
  })
  .then((displayName) => {
    console.log(displayName);
  });

// Rejection in a chain — thrown error skips later then() handlers, lands in catch()
loadEmployee()
  .then((employee) => {
    throw new Error("Formatting failed.");
  })
  .then((displayName) => {
    console.log(displayName);
  })
  .catch((error) => {
    console.error(error.message);
  });