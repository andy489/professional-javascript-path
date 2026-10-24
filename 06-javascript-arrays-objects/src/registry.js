'use strict';

// Prototypal Inheritance and Property Protection
// src/registry.js

// Task 2.1: Define vehiclePrototype with make, model, and year string properties
// and a describe() method that returns a formatted string like "YEAR MAKE MODEL".
// TODO 2.1: Replace the empty object below with your vehiclePrototype implementation.
const vehiclePrototype = {
  make: 'Generic',
  model: 'Vehicle',
  year: 2024,
  describe() {
    return `${this.year} ${this.make} ${this.model}`;
  }
};

// Task 2.2: Assign own make, model, and year properties to car with specific string/number values.
// TODO 2.2: Add car.make, car.model, and car.year assignments below.
const car = Object.create(vehiclePrototype);
car.make = 'Toyota';
car.model = 'Camry';
car.year = 2023;
console.log('car own properties:', Object.keys(car));
console.log('car.describe():', car.describe());

// Task 3.1: Use Object.defineProperty to add a vin property to vehiclePrototype
// with value: 'UNKNOWN', writable: false, configurable: false, enumerable: true.
// TODO 3.1
Object.defineProperty(vehiclePrototype, 'vin', {
  value: 'UNKNOWN',
  writable: false,
  configurable: false,
  enumerable: true
});

// Task 3.2: Use Object.defineProperty to add an _id property to vehiclePrototype
// with a string value, writable: true, configurable: true, enumerable: false.
// TODO 3.2
Object.defineProperty(vehiclePrototype, '_id', {
  value: 'VEHICLE-001',
  writable: true,
  configurable: true,
  enumerable: false
});

// Task 4.1: Assign Object.getOwnPropertyNames results to carOwnNames and protoOwnNames, then log both.
// TODO 4.1: carOwnNames = Object.getOwnPropertyNames(car);
//           protoOwnNames = Object.getOwnPropertyNames(vehiclePrototype);
//           Log both arrays with descriptive labels using console.log.
let carOwnNames = Object.getOwnPropertyNames(car);
let protoOwnNames = Object.getOwnPropertyNames(vehiclePrototype);
console.log('car own properties:', carOwnNames);
console.log('vehiclePrototype own properties:', protoOwnNames);

// Task 4.2: Use for...in loops to populate allKeys (all enumerable) and ownKeys (own only), then log both.
// TODO 4.2: Write a for...in loop over car that pushes each key into allKeys.
//           Write a second for...in loop over car using Object.prototype.hasOwnProperty.call
//           to push only own keys into ownKeys. Log both arrays.
let allKeys = [];
for (const key in car) {
  allKeys.push(key);
}
console.log('for...in (all enumerable):', allKeys);

let ownKeys = [];
for (const key in car) {
  if (Object.prototype.hasOwnProperty.call(car, key)) {
    ownKeys.push(key);
  }
}
console.log('for...in (own only):', ownKeys);

// Task 5.1: Call Object.freeze(vehiclePrototype) after all property definitions above.
// TODO 5.1
Object.freeze(vehiclePrototype);

// Task 5.2: Add 'use strict' at the very top of this file.
// Then add a try/catch block below that attempts to assign a new value to vehiclePrototype.make.
// Assign the caught error to frozenError, and log the error message and the unchanged property value.
// TODO 5.2
let frozenError = null;
try {
  vehiclePrototype.make = 'Honda';
} catch (e) {
  frozenError = e;
  console.log('TypeError caught:', e.message);
}
console.log('vehiclePrototype.make after attempt:', vehiclePrototype.make);

module.exports = { vehiclePrototype, car, carOwnNames, protoOwnNames, allKeys, ownKeys, frozenError };
