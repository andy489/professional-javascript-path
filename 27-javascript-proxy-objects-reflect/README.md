# JavaScript Proxy Objects and Reflect

A complete course on JavaScript's `Proxy` object and the `Reflect` API — covering how objects work internally, how to write handler traps, and how to apply proxies to real-world problems including validation, auditing, iteration control, function throttling, and reactive patterns. Requires ECMAScript 2015 (ES6) or later.

All four modules are consolidated into a single notebook.

## Notebook

| File | Contents |
|---|---|
| [`javascript-proxy-objects-reflect.ipynb`](javascript-proxy-objects-reflect.ipynb) | All modules — concepts, diagrams, code examples |

## Modules

| # | Title | Topics |
|---|---|---|
| 01 | JavaScript's Proxy Object | How JS objects work, creating proxies, `get`/`set`/`apply` traps, what can be wrapped |
| 02 | Iteration with Proxies | Array proxies, `ownKeys`/`has` traps, nested proxies |
| 03 | Proxies in Action | `construct` trap, `defineProperty`/`deleteProperty`, extensibility traps, throttling, revocable proxies |
| 04 | Simplifying Proxies with Reflect | The `Reflect` API, mirroring handler traps, `receiver` context, complete example |

## Demos

Each demo directory contains a `before/` and `after/` subdirectory showing the starting point and completed solution.

| Directory | Module | Demonstrates |
|---|---|---|
| [`01-proxy-object-demos/`](01-proxy-object-demos/) | 01 | Basic `get`/`set`/`apply` traps on a customer object and function proxy |
| [`02-iteration-proxies-demos/`](02-iteration-proxies-demos/) | 02 | Array and object key iteration interception |
| [`03-proxies-in-action-demos/`](03-proxies-in-action-demos/) | 03 | Class proxy with `construct`, property naming rules, extensibility traps, throttling, revocable proxy |
| [`04-reflect-demos/`](04-reflect-demos/) | 04 | Full `Reflect`-based proxy wrapping an `Order` class |

## Assets

The [`assets/`](assets/) directory contains educational diagrams extracted from the course slides:

- `01-javascript-object-operations.png` — how get/set/apply map to object property access
- `02-proxy-facade-pattern.png` — proxy as a façade between caller code and the target
- `03-proxy-architecture.png` — proxy + handler structure overview
- `04-proxy-handler-return-types.png` — required return types for each handler trap
