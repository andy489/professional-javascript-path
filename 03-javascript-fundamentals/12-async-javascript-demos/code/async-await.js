// Async function — always returns a Promise, even for a plain return value
async function loadEmployee() {
  return {
    firstName: "Andrey",
    department: "Engineering"
  };
}

// Calling the async function returns the promise wrapper, not the value
const result = loadEmployee();

console.log(result);

// await — unwrap the resolved value (top-level await requires an ES module)
const employee = await loadEmployee();

console.log(employee);

// Async function that awaits a real promise — wait() simulates a slow operation
function wait(milliseconds) {
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });
}

async function loadEmployeeSlowly() {
  await wait(1000);

  return {
    firstName: "Sarah",
    department: "Product"
  };
}

const slowEmployee = await loadEmployeeSlowly();

console.log(slowEmployee);

// try/catch with awaited promises — rejection behaves like a thrown error
async function loadBrokenEmployee() {
  await wait(500);

  throw new Error("Could not load employee.");
}

try {
  const brokenEmployee = await loadBrokenEmployee();
  console.log(brokenEmployee);
} catch (error) {
  console.error(error.message);
}

// Pass through a promise — no await needed when the caller will handle it
function loadEmployeeDirectly() {
  return loadEmployeeSlowly();
}

// Unnecessary await — function adds nothing here, await is redundant
async function loadEmployeeWithUnnecessaryAwait() {
  return await loadEmployeeSlowly();
}

// await with try/catch — needed when the function adds its own error handling
async function loadEmployeeWithHandling() {
  try {
    const employee = await loadEmployeeSlowly();
    return employee;
  } catch (error) {
    throw new Error("Employee loading failed.", { cause: error });
  }
}