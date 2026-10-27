# JavaScript Asynchronous Programming

A practical guide to writing asynchronous JavaScript using Promises and async/await — from understanding callback problems through creating and queuing promises to modern async/await syntax. All modules are consolidated into a single Jupyter notebook.

## Notebook

[javascript-asynchronous-programming.ipynb](javascript-asynchronous-programming.ipynb)

## Modules

| # | Title | Topics |
|---|---|---|
| 01 | Understanding Promises | Race conditions, callback pyramid of doom, Promise states (pending/fulfilled/rejected), eager execution |
| 02 | Consuming Promises | `.then()`, `.catch()`, `.finally()`, chaining promises |
| 03 | Queuing Promises | `Promise.all()`, `Promise.allSettled()`, `Promise.any()`, `Promise.race()` |
| 04 | Creating Promises | `new Promise()`, executor function, `resolve()`, `reject()`, wrapping XHR |
| 05 | Iterating with Async/Await | `async`/`await` syntax, error handling with `try`/`catch`, sequential vs. parallel requests |

## Assets

Key diagrams are in [`assets/`](assets/):

| File | Content |
|---|---|
| `01-valid-promise-chain.png` | Valid promise chain showing interleaved `.then()` and `.catch()` |
| `02-synchronous-loading.png` | Sequential API request flow (one at a time) |
| `03-async-parallel-loading.png` | Parallel API request fan-out |
| `04-async-blocking-scope.png` | `await` blocking current function only |

## Usage

Open the notebook with JupyterLab or the VS Code Jupyter extension:

```bash
jupyter lab javascript-asynchronous-programming.ipynb
```
