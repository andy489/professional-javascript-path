const employee = {
  firstName: "Andrey",
  lastName: "Stoev",
  department: "Engineering",
  title: "Principal Engineer",
  isActive: true,
  numberOfYearsEmployed: 6
};

const jsonValue = JSON.stringify(employee);

console.log(jsonValue);
console.log(typeof jsonValue);

const formattedJson = JSON.stringify(employee, null, 2);

console.log(formattedJson);

const employeeWithExtraValues = {
  firstName: "Andrey",
  lastName: "Stoev",
  middleName: undefined,
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
};

console.log(JSON.stringify(employeeWithExtraValues, null, 2));

const employeeWithDate = {
  firstName: "Andrey",
  lastName: "Stoev",
  startDate: new Date("2019-03-15")
};

const jsonWithDate = JSON.stringify(employeeWithDate, null, 2);

console.log(jsonWithDate);

const jsonText = `{
  "firstName": "Sarah",
  "lastName": "Smith",
  "department": "Product",
  "isActive": true
}`;

const parsedEmployee = JSON.parse(jsonText);

console.log(parsedEmployee);
console.log(parsedEmployee.firstName);

const invalidJson = "Hello";

const parsedValue = JSON.parse(invalidJson);

console.log(parsedValue);