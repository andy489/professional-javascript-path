class Person {
  firstName;
  lastName;
  age;
  #adultAge = 18;

  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  #isAdult() {
    return this.age >= this.#adultAge;
  }
  isQualified() {
    return this.#isAdult();
  }
}

let jim = new Person('Jim', 'Cooper', 17);
display(jim.isQualified());
