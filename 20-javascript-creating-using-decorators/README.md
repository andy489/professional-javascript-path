# JavaScript: Creating and Using Decorators

A comprehensive guide to the JavaScript decorator proposal — from first principles through building a decorator-based web framework with dependency injection and metadata-driven validation.

All three modules are consolidated into a single notebook:
[`javascript-creating-using-decorators.ipynb`](javascript-creating-using-decorators.ipynb)

## Modules

| # | Topic | Description |
|---|---|---|
| 01 | Introduction to Decorators | What decorators are, types, metaprogramming, method decorators, Babel.js setup |
| 02 | Implementing a Decorators Library | Decorator factories, multiple decorators, execution order, composition patterns |
| 03 | Implementing a Decorator-Based Web Framework | Class/property/accessor/auto-accessor decorators, routing, DI, metadata, validation |

## Demo Projects

Each demo is a Node.js project using Babel.js to transpile decorator syntax. Run with:

```bash
cd <demo-dir>
npm install
npx babel src -d lib
node lib/app.js
```

| Directory | Module | Contents |
|---|---|---|
| [`01-introduction-to-decorators-demos/`](01-introduction-to-decorators-demos/) | 01 | Babel setup, `@retry` method decorator |
| [`02-implementing-decorators-library-demos/`](02-implementing-decorators-library-demos/) | 02 | `@retry` factory, `@log`, `Metric` class, decorator composition |
| [`03-decorator-based-web-framework-demos/`](03-decorator-based-web-framework-demos/) | 03 | Full framework: `@Controller`, `@Get`, `@Injectable`, `@Inject`, validation library |

## Assets

The [`assets/`](assets/) directory contains educational diagrams extracted from the course slides:

| File | Description |
|---|---|
| `01-babel-workflow.png` | Babel.js compilation pipeline |
| `02-multiple-decorators-annotation.png` | Annotated decorator application order |
| `03-decorator-execution-order.png` | Two-panel: code + execution trace |
| `04-decorator-order-comparison.png` | Side-by-side decorator order comparison |
| `05-http-api-implementation.png` | Controller code with HTTP response |
| `06-object-graph.png` | Dependency injection object graph |
| `07-test-objects-graph.png` | Object graph with test doubles |

## Requirements

- Node.js 20+
- Python 3 with `jupyter` for running the notebook
