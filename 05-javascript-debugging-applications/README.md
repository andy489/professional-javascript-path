# JavaScript Debugging Applications

A practical course covering JavaScript debugging from first principles through advanced techniques, using VS Code for backend debugging and Chrome DevTools for frontend debugging.

All modules are consolidated into a single notebook: [`javascript-debugging-applications.ipynb`](javascript-debugging-applications.ipynb)

## Modules

| # | Title |
|---|---|
| 01 | Basic Debugging Concepts |
| 02 | Debugging Backend JavaScript with VS Code |
| 03 | Debugging Frontend JavaScript with Chrome DevTools |
| 04 | Finding Common Bugs |
| 05 | Final Points |

## Demo Project

[`01-skills-app-demos/`](01-skills-app-demos/) — A Node.js/Express skills management app used throughout the course to demonstrate all debugging techniques.

```bash
cd 01-skills-app-demos
npm install
npm start
```

The repository has multiple branches, each containing a version of the app with a specific bug to debug.

## Assets

[`assets/`](assets/) contains diagrams extracted from course slides:

- `01-stepping-through-code.png` — Step over, step into, and step out controls
- `02-stack-trace-annotated.png` — Annotated stack trace example

## Setup

No special dependencies are needed to read the notebook. To run code cells:

```bash
pip install jupyter
jupyter notebook javascript-debugging-applications.ipynb
```
