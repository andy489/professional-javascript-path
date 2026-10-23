# AI-assisted JavaScript Development

A practical guide to using AI as a development partner for vanilla JavaScript — covering effective prompting, pseudocode-to-code translation, AI-assisted debugging, and taking full ownership of AI-generated output. All four modules are consolidated into a single Jupyter notebook.

## Notebook

[`ai-assisted-javascript-development.ipynb`](ai-assisted-javascript-development.ipynb)

Open with JupyterLab or the VS Code Jupyter extension:

```bash
jupyter lab ai-assisted-javascript-development.ipynb
```

## Modules

| # | Topic |
|---|---|
| 01 | Generating and Understanding JavaScript with AI |
| 02 | Turning Pseudocode into Working JavaScript Logic |
| 03 | Debugging JavaScript Faster with AI |
| 04 | Owning AI-assisted Code |

## Demos

Each demo directory contains `before/` and `after/` states of a task prioritizer app, plus prompts and resources used during the module.

| Directory | Module |
|---|---|
| [`01-generating-javascript-demos/`](01-generating-javascript-demos/) | Module 01: Generating JavaScript with AI |
| [`02-pseudocode-to-javascript-demos/`](02-pseudocode-to-javascript-demos/) | Module 02: Pseudocode to JavaScript (with Vitest) |
| [`03-debugging-with-ai-demos/`](03-debugging-with-ai-demos/) | Module 03: Debugging with AI (with lessons-learned) |
| [`04-owning-ai-code-demos/`](04-owning-ai-code-demos/) | Module 04: Owning AI-assisted Code (with CLAUDE.md) |

## Assets

The [`assets/`](assets/) directory contains diagrams extracted from the course slides (text-only slides are rendered inline as Markdown in the notebook):

- `01-ai-developer-workflow.png` — the Prompt → Generate → Read → Test → Refine → Own → Run cycle
- `02-ai-autonomy-spectrum.png` — inline suggestions → workspace chat → agentic tools spectrum
- `03-ai-developer-workflow-final.png` — the AI developer workflow revisited at course end

## Running the Demo Projects

The demo projects in modules 02–04 use [Vitest](https://vitest.dev/) for unit testing:

```bash
cd 02-pseudocode-to-javascript-demos/after
npm install
npm test
```
