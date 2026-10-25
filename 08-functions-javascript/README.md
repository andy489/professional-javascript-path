# JavaScript Functions

A deep dive into JavaScript functions: every way to define them, how data flows in and out, methods and encapsulation with getters/setters, scope and closure, the `this` keyword, and modern async/await patterns.

All six modules are consolidated into a single notebook: [`javascript-functions.ipynb`](javascript-functions.ipynb).

## Table of Contents

| Module | Topic |
|---|---|
| [Module 01](#) | Defining Functions |
| [Module 02](#) | Passing Data to Functions |
| [Module 03](#) | Methods, Getters and Setters |
| [Module 04](#) | Function Scope and Closure |
| [Module 05](#) | Understanding `this` |
| [Module 06](#) | Asynchronous Functions |

## Demo Projects

| Directory | Contents |
|---|---|
| [`01-defining-functions-demos/`](01-defining-functions-demos/) | Function declaration, expression, arrow, and constructor examples |
| [`02-passing-data-demos/`](02-passing-data-demos/) | Zip archives with demos for default params, rest params, and callbacks |
| [`03-methods-getters-setters-demos/`](03-methods-getters-setters-demos/) | Encapsulation with private fields, getters, and setters |
| [`04-scope-closure-demos/`](04-scope-closure-demos/) | Scope and closure in a browser context |
| [`05-this-demos/`](05-this-demos/) | `this` in global context, methods, arrow functions, `bind/call/apply` |
| [`06-async-functions-demos/`](06-async-functions-demos/) | Flight arrival board using Promises and async/await |

Each demo directory contains a `before/` starting skeleton and a `complete/` reference implementation.

## Diagrams

Educational diagrams extracted from the slides are in [`assets/`](assets/):

- `01-recursive-function-structure.png` — recursive function anatomy (call + stop condition)
- `02-pass-by-value-vs-reference.png` — primitive vs. reference type passing
- `03-scope-layers.png` — nested scope containment (global → function → child)
- `04-async-code-execution-flow.png` — async parallel execution flowchart
