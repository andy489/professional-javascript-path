# JavaScript Unit Testing with Jest

A comprehensive guide to writing, organizing, and measuring unit tests in JavaScript using the Jest testing framework. Covers first tests, common matchers, mocks and spies, asynchronous testing, and code coverage.

All modules are consolidated into a single notebook: [`javascript-unit-testing-jest.ipynb`](javascript-unit-testing-jest.ipynb)

## Modules

| # | Topic |
|---|---|
| 01 | [Writing Your First Unit Test with Jest](#) — Jest setup, test structure, hooks, `describe` blocks, CLI |
| 02 | [Exploring Common Matchers](#) — `toBe`, `toEqual`, `toStrictEqual`, `toContain`, `toMatch`, `toThrow` |
| 03 | [Using Mocks](#) — `jest.fn()`, `jest.spyOn()`, automock, manual mocks in `__mocks__/` |
| 04 | [Testing Asynchronous Code](#) — promises with `return`/`await`/`.resolves`/`.rejects`, callbacks with `done` |
| 05 | [Measuring Code Coverage](#) — 4 metrics, HTML report, coverage thresholds in config |

## Demo Projects

Each demo is the completed "after" snapshot of the GloboTicket Node.js ticketing application, showing tests added during that module.

| Directory | Contents |
|---|---|
| [`01-writing-first-unit-test-demos/`](01-writing-first-unit-test-demos/) | Basic `describe`/`test`/`expect` structure with `beforeEach` hooks |
| [`02-common-matchers-demos/`](02-common-matchers-demos/) | Tests using equality, pattern, truthiness, and error matchers |
| [`03-using-mocks-demos/`](03-using-mocks-demos/) | `jest.fn()` mock functions and `jest.spyOn()` for `Math.random` |
| [`04-async-testing-demos/`](04-async-testing-demos/) | Async/await and promise-based tests |
| [`05-code-coverage-demos/`](05-code-coverage-demos/) | Coverage collection configured in `jest.config.json` |

### Running the demos

```bash
cd 01-writing-first-unit-test-demos   # or any other demo dir
npm install
npm test
```

## Assets

The [`assets/`](assets/) directory contains educational diagrams extracted from the course slides:

- `01-test-pyramid.png` — the test pyramid showing E2E / Integration / Unit test layers
- `02-code-coverage-example.png` — a branching function illustrating branch coverage concepts
