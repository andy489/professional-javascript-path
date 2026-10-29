# JavaScript Modules

A comprehensive guide to modular JavaScript — why modules exist, how the four module standards (ES Modules, CommonJS, AMD, UMD) compare, and how to use modules in Node.js and the browser.

All modules are consolidated into a single notebook: [`javascript-modules.ipynb`](javascript-modules.ipynb).

## Modules

| # | Topic |
|---|-------|
| 01 | Modular JavaScript — why modules are needed, the evolution of JS in the browser, overview of all four standards |
| 02 | ECMAScript Modules — `import`/`export` syntax, aggregating exports, module lifetime semantics |
| 03 | CommonJS Modules — `require()`/`module.exports`, cascading imports, UMD |
| 04 | Modules in Node.js — file extensions, `"type": "module"`, mixing CJS and ESM, npm packages |
| 05 | Modules in the Browser — global scope problem, bundlers, tree shaking, native `type="module"` |

## Demos

Each demo directory contains `before/` and `after/` sub-folders showing the progression of the code.

| Directory | Content |
|-----------|---------|
| [`javascript-modules-demos/01-adding-modules/`](javascript-modules-demos/01-adding-modules/) | Splitting a single-file script into ES Module files |
| [`javascript-modules-demos/02-es-modules/`](javascript-modules-demos/02-es-modules/) | Named exports, default exports, aggregated exports, module lifetime |
| [`javascript-modules-demos/03-commonjs-modules/`](javascript-modules-demos/03-commonjs-modules/) | CommonJS `require()`/`module.exports` with lodash |
| [`javascript-modules-demos/04-nodejs-modules/`](javascript-modules-demos/04-nodejs-modules/) | ES Modules in Node.js, mixing `.cjs` files, HTTP server |
| [`javascript-modules-demos/05-browser-modules/`](javascript-modules-demos/05-browser-modules/) | Webpack bundler + native `type="module"` in the browser |

Run any Node.js demo with:

```bash
cd javascript-modules-demos/04-nodejs-modules/after
npm install
npm start
```

## Assets

Key diagrams are in [`assets/`](assets/):

- `01-modular-js-structure.png` — how `main.js` imports from multiple module files
- `02-browser-architecture.png` — browser engine / JavaScript engine / global scope layers
- `03-bundler-ast.png` — how a bundler parses source files into an Abstract Syntax Tree
- `04-bundler-tree-shaking.png` — tree shaking: trimming unused exports before bundling

## Usage

Open the notebook with JupyterLab or the VS Code Jupyter extension:

```bash
jupyter lab javascript-modules.ipynb
```
