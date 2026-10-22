// Helper — resolves with `value` after `milliseconds`
function wait(milliseconds, value) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(value), milliseconds);
  });
}

// Sequential — each await blocks until the previous step finishes
const employee = await wait(500, "Employee loaded");
console.log(employee);

const department = await wait(500, "Department loaded");
console.log(department);

const permissions = await wait(500, "Permissions loaded");
console.log(permissions);

// Concurrent — start all promises first, then await them together with Promise.all()
const employeePromise = wait(500, "Employee loaded");
const departmentPromise = wait(500, "Department loaded");
const permissionsPromise = wait(500, "Permissions loaded");

const results = await Promise.all([
  employeePromise,
  departmentPromise,
  permissionsPromise
]);

console.log(results);

// failAfter helper + Promise.all() fail-fast — one rejection short-circuits the rest
function failAfter(milliseconds, message) {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(message)), milliseconds);
  });
}

try {
  await Promise.all([
    wait(500, "Employee loaded"),
    failAfter(200, "Department failed"),
    wait(400, "Permissions loaded")
  ]);
} catch (error) {
  console.error(error.message);
}

// Promise.allSettled() — every outcome reported, partial success allowed
const settledResults = await Promise.allSettled([
  wait(500, "Employee loaded"),
  failAfter(200, "Department failed"),
  wait(400, "Permissions loaded")
]);

console.log(settledResults);