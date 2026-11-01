# AI-Native Backend Engineering with JavaScript

A practical course on building backend systems where AI models are first-class participants — classifying inputs, producing validated structured output, routing intent, communicating via the Model Context Protocol, and acting autonomously through an agentic loop. The running demo is **Supportflow AI**, a real Node.js / Express support-ticket backend built with the Anthropic Claude SDK and Zod.

All five modules are consolidated into a single notebook:

- [`ai-native-backend-engineering-javascript.ipynb`](ai-native-backend-engineering-javascript.ipynb)

## Modules

| # | Topic |
|---|---|
| 01 | Schema-First Validation for User Input |
| 02 | Schema-First Validation for LLM Output |
| 03 | Intent-Driven Routing |
| 04 | Model Context Protocol (MCP) |
| 05 | The Agentic Lifecycle Pattern |

## Code

All code snapshots live in [`code/`](code/):

| Folder | Branch | Description |
|---|---|---|
| [`code/supportflow-ai/`](code/supportflow-ai/) | `main` | Complete project |
| [`code/supportflow-ai-module-1/`](code/supportflow-ai-module-1/) | `module-1` | After Module 1 |
| [`code/supportflow-ai-module-2/`](code/supportflow-ai-module-2/) | `module-2` | After Module 2 |
| [`code/supportflow-ai-module-3/`](code/supportflow-ai-module-3/) | `module-3` | After Module 3 |
| [`code/supportflow-ai-module-4/`](code/supportflow-ai-module-4/) | `module-4` | After Module 4 |
| [`code/supportflow-ai-module-5/`](code/supportflow-ai-module-5/) | `module-5` | After Module 5 |

### Running the project

```bash
cd code/supportflow-ai        # or any module snapshot
npm install
cp .env.example .env          # set ANTHROPIC_API_KEY inside .env
node server.js                # REST API on http://localhost:3000
node src/mcp/mcp-server.js    # MCP stdio server (module 4+)
```

## Diagrams

[`assets/`](assets/) contains 30 architecture and flow diagrams extracted from the course slides. The notebook renders them inline via the `render_diagram()` helper.
