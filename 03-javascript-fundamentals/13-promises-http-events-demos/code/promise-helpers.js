// Helper — returns a promise that resolves or rejects after a delay
function wait(milliseconds, value, shouldReject = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldReject) {
        reject(new Error(`Failed: ${value}`));
        return;
      }

      resolve(value);
    }, milliseconds);
  });
}

// Promise.try() — wrap any function (sync, async, or throwing) in a promise
const result = await Promise.try(() => {
  return "Loaded employee data";
});

console.log(result);

// Promise.try() — a thrown error becomes a promise rejection
try {
  await Promise.try(() => {
    throw new Error("Invalid employee data.");
  });
} catch (error) {
  console.error(error.message);
}

// Promise.withResolvers() — get a promise plus its resolve/reject controls
const { promise, resolve, reject } = Promise.withResolvers();

resolve("Done");

console.log(await promise);

// Promise.all() — fail-fast wait for every promise to fulfill
const employeePromise = wait(300, "Employee loaded");
const departmentPromise = wait(500, "Department loaded");
const permissionsPromise = wait(200, "Permissions loaded");

const allResults = await Promise.all([
  employeePromise,
  departmentPromise,
  permissionsPromise
]);

console.log(allResults);

// Promise.allSettled() — wait for every promise, capture each outcome
const settledResults = await Promise.allSettled([
  wait(100, "Employee loaded"),
  wait(200, "Department failed", true),
  wait(150, "Permissions loaded")
]);

console.log(settledResults);

// Promise.any() — first fulfilled wins, rejections ignored unless all reject
const firstSuccessful = await Promise.any([
  wait(200, "Primary failed", true),
  wait(300, "Backup succeeded"),
  wait(100, "Cache failed", true)
]);

console.log(firstSuccessful);

// Promise.race() — first to settle wins, whether fulfilled or rejected
const fastest = await Promise.race([
  wait(300, "Slow result"),
  wait(100, "Fast result")
]);

console.log(fastest);