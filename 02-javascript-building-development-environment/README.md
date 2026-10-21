# JavaScript: Building a Development Environment

A practical guide to setting up a professional JavaScript development environment — covering IDE configuration, Node.js installation, npm package management, and debugging with VS Code.

All module content is consolidated into a single Jupyter notebook.

## Notebook

[javascript-building-development-environment.ipynb](javascript-building-development-environment.ipynb)

## Modules

| # | Title | Topics |
|---|---|---|
| 01 | Installing an IDE | VS Code installation, format-on-save, extensions |
| 02 | Installing Node.js | Node.js setup, npm CLI basics |
| 03 | Managing Packages with npm | `package.json`, npm registry, semantic versioning, `devDependencies`, jsconfig.json |
| 04 | Debugging with VS Code | Debugger interface, breakpoints, Node.js debug config, client-side debugging with Vite |

## Demo Directories

- [`01-ide-setup-demos/`](01-ide-setup-demos/) — VS Code `format-on-save` configuration with a small calculator module
- [`02-npm-demos/`](02-npm-demos/) — npm project with `yargs`, `eslint`, and `jsconfig.json`
- [`03-debugging-demos/`](03-debugging-demos/) — Vite-based client-side app with VS Code Chrome debugger launch config

## Assets

The [`assets/`](assets/) directory contains educational diagrams extracted from the course slides:

- `01-how-npm-works.png` — How npm install works: `package.json` → npm registry → `node_modules` + `package-lock.json`
- `02-semantic-versioning.png` — Semantic versioning breakdown: Major, Minor, Patch
- `03-ide-npm-integration.png` — VS Code npm integration features: code completion, type acquisition, problem detection, and more
