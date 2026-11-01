class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  isAdult() {
    throw new Error(
      'isAdult() function must be implemented in derived classes.'
    );
  }
}

class Student extends Person {
  courses = [];
  enroll(course) {
    this.courses.push(course);
  }
  isAdult() {
    return this.age >= 21;
  }
}

let jimPerson = new Person('Jim', 'Cooper', 18);
let jimStudent = new Student('Jim', 'Cooper', 18);
//display(jimPerson.isAdult())
display(jimStudent.isAdult());
