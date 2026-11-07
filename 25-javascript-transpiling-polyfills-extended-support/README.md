# JavaScript Transpiling and Polyfills for Extended Support

This course covers how to achieve broad browser compatibility for modern JavaScript applications using two complementary techniques: **transpiling** (rewriting newer syntax into older syntax) and **polyfilling** (adding missing built-in implementations at runtime). It also covers TypeScript as a compile-to-JavaScript language.

All modules are consolidated into a single notebook: [`javascript-transpiling-polyfills.ipynb`](javascript-transpiling-polyfills.ipynb)

## Modules

| Module | Topic |
|---|---|
| 01 | Implementing Backward Compatibility Using Transpiling |
| 02 | Adding Missing Functionality Using Polyfills |
| 03 | TypeScript Transpiling |

## Demos

- [`01-babel-transpiling-demos/`](01-babel-transpiling-demos/) — Three Babel demos: optional chaining, basic transpilation, and ES module transpilation
- [`02-polyfilling-demos/`](02-polyfilling-demos/) — Countries search app using core-js + Webpack
- [`03-typescript-transpiling-demos/`](03-typescript-transpiling-demos/) — TypeScript + Webpack (with and without core-js polyfills)

Each demo uses npm. Install dependencies and run:
```bash
cd <demo-dir>/<sub-demo>
npm install
npm run build   # for Babel demos
npm start       # for Webpack demos (webpack-dev-server)
```

## Assets

The [`assets/`](assets/) directory contains educational diagrams extracted from the course slides:

- `01-ecmascript-versions-timeline.png` — ECMAScript version history timeline
- `02-transpiling-flow.png` — ES6→ES5→browser flow
- `03-transpiling-code-comparison.png` — Side-by-side ES6 vs transpiled ES5 code
- `04-transpiling-class-comparison.png` — Before/after transpiling an ES6 class
- `05-polyfilling-flow.png` — Polyfilling concept: unsupported features→polyfill→browser
