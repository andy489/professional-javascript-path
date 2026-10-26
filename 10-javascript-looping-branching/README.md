# JavaScript: Looping and Branching

A comprehensive guide to iteration and branching in JavaScript (ECMAScript 2022), covering all common loop constructs, advanced iteration patterns, and conditional branching including the nullish coalescing operator.

All three modules are consolidated into a single Jupyter notebook.

## Notebook

- [javascript-looping-branching.ipynb](javascript-looping-branching.ipynb)

## Modules

| # | Title | Topics |
|---|---|---|
| 01 | Understanding Iteration Thoroughly | JavaScript engines, `for`, `for-of`, `forEach()`, `while`, `do-while`, iterables, sparse arrays, `continue`/`break`, array search methods |
| 02 | Grasping Advanced Iteration Concepts | `for-in`, `for-await-of`, performance considerations |
| 03 | Branching and Its Pitfalls | `if/else if/else`, `switch`, fall-through, ternary operator, nullish coalescing (`??`) |

## Demos

[`01-looping-branching-demos/`](01-looping-branching-demos/) — starter project with examples for each module:

| Directory | Contents |
|---|---|
| [`01-iteration-basics/`](01-looping-branching-demos/01-iteration-basics/) | Classic `for` loop, HTML stock list, `for-of` |
| [`02-advanced-iteration/`](01-looping-branching-demos/02-advanced-iteration/) | `for-in` on objects, `for-await-of` with paginated GitHub API |
| [`03-branching/`](01-looping-branching-demos/03-branching/) | `if/else` and `switch` branching exercises |

## Assets

[`assets/`](assets/) — key diagrams extracted from course slides:

| File | Description |
|---|---|
| `01-js-engines.png` | JavaScript code running in V8 and SpiderMonkey engines |
| `02-iterable-htmlcollection-relationship.png` | Relationships between Array, HTMLCollection, and the Iterable protocol |

## Usage

Open the notebook with JupyterLab or the VS Code Jupyter extension:

```bash
jupyter lab javascript-looping-branching.ipynb
```

To run the async demo (requires Node.js ≥ 18 or `npm install` for `node-fetch`):

```bash
cd 01-looping-branching-demos
npm install
node 02-advanced-iteration/_2for_await_of.js
```
