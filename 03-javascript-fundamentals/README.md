# JavaScript Fundamentals

A practical, ground-up introduction to modern JavaScript (up to ECMAScript 2025). Covers core language mechanics, data structures, functions, asynchronous patterns, testing, tooling, and clean code — all demonstrated with a running employee-directory project. Uses Node.js 24 LTS as the runtime baseline.

All 16 modules are consolidated into a single Jupyter notebook.

## Notebook

| File | Description |
|---|---|
| [`javascript-fundamentals.ipynb`](javascript-fundamentals.ipynb) | Complete course — all 16 modules |

## Module Overview

| # | Module | Demo Directory |
|---|---|---|
| 01 | Getting Started with JavaScript and ECMAScript 2025 | [`01-getting-started-demos/`](01-getting-started-demos/) |
| 02 | Syntax, Variables, and Primitive Data Types | [`02-syntax-variables-demos/`](02-syntax-variables-demos/) |
| 03 | Objects, Type Conversions, and Modern Syntax | [`03-objects-modern-syntax-demos/`](03-objects-modern-syntax-demos/) |
| 04 | Expressions, Operators, and Conditional Logic | [`04-expressions-operators-demos/`](04-expressions-operators-demos/) |
| 05 | Branching, Loops, and Input Validation | [`05-branching-loops-demos/`](05-branching-loops-demos/) |
| 06 | Arrays, Objects, Maps, and Sets | [`06-arrays-objects-maps-sets-demos/`](06-arrays-objects-maps-sets-demos/) |
| 07 | Grouping, Iteration, and Data Flow | [`07-grouping-iteration-demos/`](07-grouping-iteration-demos/) |
| 08 | Function Fundamentals, Scope, and Closures | [`08-function-scope-closures-demos/`](08-function-scope-closures-demos/) |
| 09 | Functional Patterns, Recursion, and Lazy Processing | [`09-functional-patterns-demos/`](09-functional-patterns-demos/) |
| 10 | Problem Solving and Debugging JavaScript | [`10-problem-solving-debugging-demos/`](10-problem-solving-debugging-demos/) |
| 11 | Testing JavaScript Code | [`11-testing-demos/`](11-testing-demos/) |
| 12 | Asynchronous JavaScript | [`12-async-javascript-demos/`](12-async-javascript-demos/) |
| 13 | Promises, HTTP Requests, and Event Handling | [`13-promises-http-events-demos/`](13-promises-http-events-demos/) |
| 14 | Modules, Packages, and Project Structure | [`14-modules-packages-demos/`](14-modules-packages-demos/) |
| 15 | File I/O, Data Transfer, and Databases | [`15-file-io-databases-demos/`](15-file-io-databases-demos/) |
| 16 | Clean, Maintainable Code and Reading Existing Code | [`16-clean-code-tooling-demos/`](16-clean-code-tooling-demos/) |

## Assets

Diagrams extracted from course slides are in [`assets/`](assets/):

| File | Used in |
|---|---|
| `01-ecmascript-vs-javascript.png` | Module 01 — ECMAScript vs. JavaScript comparison |
| `02-engines-and-runtimes.png` | Module 01 — JavaScript engines and runtimes |
| `03-iterable-iterator-concepts.png` | Module 06 — Iterable and iterator concepts |
| `04-employees-table.png` | Module 15 — Employees database table example |

## Setup

Most demo directories are plain Node.js projects. For those with a `package.json`, install dependencies before running:

```bash
cd <demo-directory>
npm install
npm start    # or: node src/index.js
npm test     # run tests
```

Demos in `11-testing-demos/`, `14-modules-packages-demos/`, `15-file-io-databases-demos/`, and `16-clean-code-tooling-demos/` include `package-lock.json` files — use `npm install` (not `npm ci`) to restore dependencies.

**Runtime requirement:** Node.js 24 LTS or newer.
