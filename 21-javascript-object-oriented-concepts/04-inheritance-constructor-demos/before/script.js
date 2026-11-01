function Person(firstName, lastName, age) {
  let adultAge = 18;
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  let isAdult = () => {
    return this.age >= adultAge;
  };
  this.isQualified = function () {
    return isAdult();
  };
}

let jim = new Person('Jim', 'Cooper', 17);
display(jim.isQualified());
