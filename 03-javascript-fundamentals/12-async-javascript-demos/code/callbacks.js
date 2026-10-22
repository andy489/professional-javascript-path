// Synchronous callback — illustrates the pattern; nothing async yet
function processEmployee(employee, callback) {
  callback(employee);
}

processEmployee({ firstName: "Andrey" }, (employee) => {
  console.log(employee.firstName);
});

// Asynchronous callback — setTimeout runs the callback after the delay
console.log("Before timer.");

setTimeout(() => {
  console.log("Timer finished.");
}, 1000);

console.log("After timer.");

// Error-first callback style — Node.js legacy pattern, error is first argument
function fakeReadEmployeeFile(callback) {
  const error = null;
  const data = "Employee data";

  callback(error, data);
}

fakeReadEmployeeFile((error, data) => {
  if (error) {
    console.error(error.message);
    return;
  }

  console.log(data);
});

// Callback nesting — pyramid of indentation as async steps stack up
// (illustrative — getEmployee and getDepartment are not defined here)
// getEmployee((error, employee) => {
//.  if (error) {
//.    console.error(error.message);
//.    return;
//.  }
//
//.  getDepartment(employee.departmentId, (error, department) => {
//.    if (error) {
//.      console.error(error.message);
//.      return;
//.    }
//
//.    console.log(department.name);
//.  });
// });