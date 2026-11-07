# Modern JavaScript: The Efficiency Upgrade

A practical deep-dive into modern JavaScript features that make everyday code more expressive and efficient. Covers template literals, control flow patterns, error handling with Promises and the `using` declaration, iteration patterns, data collections (`Map`, `Set`, `WeakMap`, `WeakSet`), and functional programming essentials including closures, factories, and currying.

All modules are consolidated into a single notebook: [`modern-javascript-efficiency-upgrade.ipynb`](modern-javascript-efficiency-upgrade.ipynb)

## Modules

| # | Topic | Demo directory |
|---|-------|---------------|
| 01 | Strings | [`01-strings-demos/`](01-strings-demos/) |
| 02 | Control Flow | [`02-control-flow-demos/`](02-control-flow-demos/) |
| 03 | Error Handling | [`03-error-handling-demos/`](03-error-handling-demos/) |
| 04 | Iteration Patterns | [`04-iteration-patterns-demos/`](04-iteration-patterns-demos/) |
| 05 | Data Collections | [`05-data-collections-demos/`](05-data-collections-demos/) |
| 06 | Functional Programming Essentials | [`06-functional-programming-essentials-demos/`](06-functional-programming-essentials-demos/) |

## Demo Directories

Each demo directory contains standalone Node.js scripts. Run any example with:

```bash
node index.js
```

Each subdirectory inside a demo folder is a self-contained example with its own `package.json`.

## Setup

No global dependencies required beyond Node.js. Each demo runs with plain `node` — no `npm install` needed unless a specific demo's `package.json` lists dependencies.
