# Object-oriented Concepts in JavaScript

A hands-on exploration of JavaScript's prototype-based object model and how it maps to the four core OOP concepts — encapsulation, composition, inheritance, and polymorphism. Covers all three implementation styles: plain prototype objects, constructor functions, and ES6 classes.

All modules are consolidated into a single notebook:

- [javascript-object-oriented-concepts.ipynb](javascript-object-oriented-concepts.ipynb)

## Modules

| # | Topic |
|---|---|
| 01 | Course Introduction — OOP concepts, loosely-typed vs. strongly-typed, prototypes vs. classes |
| 02 | Understanding JavaScript Prototypes — prototype chain, `Object.setPrototypeOf`, `hasOwnProperty` |
| 03 | Using JavaScript Constructor Functions — `new`, shared prototype methods, closure-based privacy |
| 04 | Inheritance with Constructor Functions and Prototypes — `Object.create`, `Function.call`, abstract methods |
| 05 | Using JavaScript Classes — `class` syntax, private fields (`#`), private methods |
| 06 | Inheritance with JavaScript Classes — `extends`, `super`, method overriding, composition vs. inheritance |

## Demos

Each module has a corresponding demo directory with `before/` and `after/` versions. Open `index.html` in a browser to run the demos.

| Directory | Module |
|---|---|
| [01-introduction-demos/](01-introduction-demos/) | Module 01 — Course introduction starter |
| [02-prototypes-demos/](02-prototypes-demos/) | Module 02 — Prototype chain with `Object.setPrototypeOf` |
| [03-constructor-functions-demos/](03-constructor-functions-demos/) | Module 03 — Constructor functions |
| [04-inheritance-constructor-demos/](04-inheritance-constructor-demos/) | Module 04 — Inheritance with constructor functions |
| [05-classes-demos/](05-classes-demos/) | Module 05 — ES6 classes with private fields |
| [06-class-inheritance-demos/](06-class-inheritance-demos/) | Module 06 — Class inheritance with `extends` |

## Assets

The [`assets/`](assets/) directory contains 10 educational diagrams extracted from the course slides:

| File | Description |
|---|---|
| `01-encapsulation-composition.png` | Encapsulation and composition with `Person`/`Vehicle` objects |
| `02-oo-concepts-inheritance.png` | Inheritance: `Person` → `Student extends Person` |
| `03-oo-concepts-polymorphism.png` | Polymorphism: `isAdult()` override in `Student` |
| `04-prototypes-vs-classes.png` | Side-by-side comparison of class hierarchies vs. prototype chains |
| `05-prototype-chain.png` | Prototype chain: `jim` → `Student` → `Person` with lookup arrows |
| `06-prototype-chain-object.png` | Full chain including `Object` at the top |
| `07-constructor-function-new.png` | What `new` does step-by-step with a constructor function |
| `08-prototype-on-instance.png` | Shared prototype method linked from instance via `__proto__` |
| `09-shared-prototype-two-instances.png` | Two instances sharing one prototype |
| `10-class-constructor-steps.png` | What `new ClassName()` does step-by-step with ES6 class syntax |
