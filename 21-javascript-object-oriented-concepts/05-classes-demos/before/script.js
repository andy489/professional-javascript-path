function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}
Person.prototype.isAdult = function () {
  throw new Error(
    'isAdult() function must be implemented in derived constructor functions.'
  );
};

function Student(firstName, lastName, age) {
  Person.call(this, firstName, lastName, age);
  this.courses = [];
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
Student.prototype.enroll = function (course) {
  this.courses.push(course);
};
Student.prototype.isAdult = function () {
  return this.age >= 21;
};

let jimPerson = new Person('Jim', 'Cooper', 18);
let jimStudent = new Student('Jim', 'Cooper', 18);
//display(jimPerson.isAdult());
display(jimStudent.isAdult());
