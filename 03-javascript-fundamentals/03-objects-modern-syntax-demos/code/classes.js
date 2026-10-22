class Employee {
  static companyName = "Example Corp";

  static createGuestEmployee(firstName, lastName) {
    return new Employee("GUEST", firstName, lastName);
  }

  constructor(department, firstName, lastName) {
    this.department = department;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

console.log(Employee.companyName);

const guest = Employee.createGuestEmployee("Sarah", "Smith");

console.log(guest);

Object.hasOwn(employee, "firstName");
Number.isSafeInteger(42);
JSON.stringify(employee);

class Manager extends Employee {
  constructor(department, firstName, lastName, teamSize) {
    super(department, firstName, lastName);
    this.teamSize = teamSize;
  }
}