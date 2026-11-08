# JavaScript Generators

A deep dive into JavaScript generator functions — from core mechanics to real-world async patterns, streaming, database integration, and production best practices. All modules are consolidated into a single Jupyter notebook.

## Notebook

All course content is in **[javascript-generators.ipynb](javascript-generators.ipynb)**.

## Modules

| # | Title | Topics |
|---|---|---|
| 01 | Generator Basics | `function*`, `yield`, `next()`, iterator protocol, `yield*` delegation |
| 02 | Working with Generator Patterns | Async generators, error handling, Redux Saga, Promises + generators |
| 03 | Practical Use Cases | Lazy evaluation, data streaming, databases/APIs, observer & mediator patterns |
| 04 | Best Practices and Production Concerns | Debugging, performance profiling, optimisation pitfalls, security |

## Demo Projects

| Directory | Module | Description |
|---|---|---|
| [`01-generator-basics-demos/`](01-generator-basics-demos/) | 01 | Basic generator examples: `next()`, cancellation, delegation |
| [`02-generator-patterns-demos/`](02-generator-patterns-demos/) | 02 | Async generators, error handling, promise-yielding patterns |
| [`03-practical-use-cases-demos/`](03-practical-use-cases-demos/) | 03 | Express lazy-loading, WebSocket streaming, DB batch processing, design patterns |
| [`04-best-practices-demos/`](04-best-practices-demos/) | 04 | Debugging state/error issues, performance profiling with DevTools |

## Assets

The [`assets/`](assets/) directory contains diagrams extracted from the course slides:

- `01-generator-promise-flow.png` — Generator and Promise flow diagram (yield → pause → resolve → resume)

## Setup

The `03-practical-use-cases-demos/` project uses Node.js with a MySQL database. Configure your connection in `03-practical-use-cases-demos/.env` and run `InsertDemoData.sql` / `products.sql` to seed the database. Install dependencies with `npm install` inside that directory.
