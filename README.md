# Professional JavaScript Path

A structured, notebook-based learning path for JavaScript — from first principles to professional-grade development. Each module is a self-contained course folder with a Jupyter notebook, key diagrams, and its own README.

## Modules

| # | Course | Description |
|---|---|---|
| 01 | [JavaScript: The Big Picture](01-javascript-the-big-picture/README.md) | What JavaScript is, where it runs, how ECMAScript versioning works, and suggested next steps |
| 02 | [JavaScript: Building a Development Environment](02-javascript-building-development-environment/README.md) | VS Code setup, Node.js, npm package management, semantic versioning, and debugging with VS Code |
| 03 | [JavaScript Fundamentals](03-javascript-fundamentals/README.md) | Core language mechanics, data structures, functions, async patterns, testing, tooling, and clean code — up to ECMAScript 2025 |
| 04 | [AI-assisted JavaScript Development](04-ai-assisted-javascript-development/README.md) | Effective prompting, pseudocode-to-code translation, AI-assisted debugging, and owning AI-generated output |
| 05 | [JavaScript Debugging Applications](05-javascript-debugging-applications/README.md) | Breakpoints, stepping controls, VS Code backend debugging, Chrome DevTools frontend debugging, and common bug patterns |
| 06 | [JavaScript Arrays and Objects](06-javascript-arrays-objects/README.md) | Prototype chains, property descriptors, reference semantics, deep copying, array manipulation, and functional iteration patterns |
| 07 | [JavaScript Strings and Regular Expressions](07-javascript-strings-regular-expressions/README.md) | Quote styles, template literals, Unicode, String API, substringing, .at(), regex flags, match/replace |
| 08 | [JavaScript Functions](08-functions-javascript/README.md) | Defining functions, passing data, methods/getters/setters, scope and closure, `this`, async/await |
| 09 | [JavaScript Error Handling](09-javascript-error-handling/README.md) | Error taxonomy, runtime errors, built-in error types, `try/catch/finally`, custom errors, async error handling |
| 10 | [JavaScript: Looping and Branching](10-javascript-looping-branching/README.md) | `for`, `for-of`, `forEach()`, `while`, `do-while`, iterables, sparse arrays, `for-in`, `for-await-of`, performance, `switch`, ternary, nullish coalescing (`??`) |
| 11 | [JavaScript Asynchronous Programming](11-javascript-asynchronous-programming/README.md) | Callback pyramid of doom, Promise states, `.then()`/`.catch()`/`.finally()`, `Promise.all/allSettled/any/race`, creating promises, `async`/`await` |
| 12 | [JavaScript Network Requests](12-javascript-network-requests/README.md) | Fetch API, Axios, XMLHttpRequest, WebSockets — GET/POST, error handling, AbortController, streaming, CORS, real-time push |
| 13 | [JavaScript Modules](13-javascript-modules/README.md) | ES Modules, CommonJS, AMD, UMD — module syntax, Node.js module system, bundlers, tree shaking, native browser modules |
| 14 | [JavaScript in the Browser](14-javascript-in-the-browser/README.md) | DOM fundamentals, DOM manipulation, event handling, mouse and keyboard events, HTML form handling |
| 15 | [JavaScript npm/yarn Package Management](15-javascript-npm-yarn-package-management/README.md) | Package manager concepts, npm and Yarn workflows, `package.json`, lockfiles, scripts, publishing, and Yarn's zero-install architecture |
| 16 | [JavaScript Unit Testing with Jest](16-javascript-unit-testing-jest/README.md) | Jest setup, common matchers, mocks and spies, async testing, and code coverage |
| 17 | [Building a REST API in JavaScript with Express](17-javascript-express-building-rest-api/README.md) | REST concepts, Node.js + Express setup, design principles, planning, and testing with Postman and curl |
| 18 | [AI-Native Backend Engineering with JavaScript](18-ai-native-backend-engineering-javascript/README.md) | Schema-first validation with Zod, LLM output validation with retry loops, intent-driven routing, Model Context Protocol (MCP), and the agentic Plan → Act → Observe → Reflect lifecycle |
| 19 | [Building a Web Application with JavaScript](19-javascript-building-web-application/README.md) | Planning, HTML/CSS layout, JavaScript CRUD functionality, and publishing a full-stack Node.js/Express/MySQL web app |
| 20 | [JavaScript: Creating and Using Decorators](20-javascript-creating-using-decorators/README.md) | Decorator proposal (TC39 Stage 3), method/class/property/accessor/auto-accessor decorators, decorator libraries, web framework with DI and metadata-driven validation |
| 21 | [Object-oriented Concepts in JavaScript](21-javascript-object-oriented-concepts/README.md) | OOP concepts (encapsulation, composition, inheritance, polymorphism), prototype chain, constructor functions, and ES6 classes with private fields |
| 22 | [Functional Programming Concepts in JavaScript](22-javascript-functional-programming-concepts/README.md) | FP paradigm, pure functions, closures, function composition with Ramda, built-in array methods, recursion, higher-order functions, currying, and FP in React and Svelte |
| 23 | [Modern JavaScript: The Efficiency Upgrade](23-modern-javascript-efficiency-upgrade/README.md) | Template literals, tagged templates, control flow patterns, Promise.try/allSettled/using, iteration methods, Map/Set/WeakMap/WeakSet, closures, function factories, and currying |
| 24 | [JavaScript Performance Playbook](24-javascript-performance-playbook/README.md) | Best practices, legacy modernisation, memory leaks, DOM optimisation, variable scope, sync vs. async, throttling/debouncing, caching, and compression |
| 25 | [JavaScript Transpiling and Polyfills for Extended Support](25-javascript-transpiling-polyfills-extended-support/README.md) | Transpiling ES6+ to ES5 with Babel, polyfilling missing built-ins with core-js, and TypeScript transpilation with Webpack |
| 26 | [JavaScript Generators](26-javascript-generators/README.md) | Generator functions, `yield`, lazy evaluation, async generators, streaming, design patterns, debugging, and production concerns |
| 27 | [JavaScript Proxy Objects and Reflect](27-javascript-proxy-objects-reflect/README.md) | How JS objects work internally, creating proxies, handler traps (`get`/`set`/`apply`/`construct`/`ownKeys`), iteration control, function throttling, revocable proxies, and the `Reflect` API |

## Usage

Each module folder contains a Jupyter notebook. Open any notebook with JupyterLab or the VS Code Jupyter extension:

```bash
jupyter lab 01-javascript-the-big-picture/javascript-the-big-picture.ipynb
```
