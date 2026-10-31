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

## Demo Project

[`supportflow-ai/`](supportflow-ai/) — the complete backend application built throughout the course.

```bash
cd supportflow-ai
npm install
cp .env.example .env   # add ANTHROPIC_API_KEY
node server.js          # REST API on http://localhost:3000
node src/mcp/mcp-server.js   # MCP stdio server
```

## Diagrams

[`assets/`](assets/) contains 30 architecture and flow diagrams extracted from the course slides. The notebook renders them inline via the `render_diagram()` helper.
