let Person = {
  firstName: '',
  lastName: '',
  age: 21,
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

let Student = {
  enrolledCourses: [],
  enroll(course) {
    this.enrolledCourses.push(course);
  },
};
Object.setPrototypeOf(Student, Person);

let jim = { firstName: 'Jim', lastName: 'Cooper', age: 29 };
Object.setPrototypeOf(jim, Student);

jim.enroll({ coruseId: 'CS101' });
display(jim.enrolledCourses);
display(jim.age);
display(jim.fullName());
