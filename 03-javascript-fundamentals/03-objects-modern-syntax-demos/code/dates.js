const now = new Date();

console.log(now);

const startDate = new Date("2019-03-15");

console.log(startDate);

const employeeStartDate = new Date(2019, 2, 15);

console.log(employeeStartDate);

console.log(employeeStartDate.getFullYear());
console.log(employeeStartDate.getMonth());
console.log(employeeStartDate.getDate());
console.log(employeeStartDate.getHours());
console.log(employeeStartDate.getMinutes());

console.log(employeeStartDate.getTime());

const epoch = new Date(0);

console.log(epoch.toUTCString());

console.log(employeeStartDate.toString());
console.log(employeeStartDate.toDateString());

console.log(employeeStartDate.toLocaleDateString("en-US"));
console.log(employeeStartDate.toLocaleDateString("en-GB"));
console.log(employeeStartDate.toLocaleDateString("ja-JP"));

const options = {
  dateStyle: "medium",
  timeStyle: "short"
};

console.log(now.toLocaleString("en-US", options));