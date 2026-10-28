# JavaScript Network Requests

A practical guide to making HTTP requests in JavaScript using the Fetch API, Axios, XMLHttpRequest, and WebSockets. All examples are browser-based but the patterns apply equally to Node.js environments. Demos use an Express + SQLite back-end (the Globoticket app).

All modules are consolidated into a single notebook: [javascript-network-requests.ipynb](javascript-network-requests.ipynb)

## Modules

| # | Topic |
|---|-------|
| 01 | HTTP Requests with fetch() — basics, HTTP fundamentals |
| 02 | Deep Dive into fetch() — options, POST, error handling, AbortController, streaming, CORS |
| 03 | HTTP Requests with Axios — GET, POST, error handling, download progress |
| 04 | HTTP Requests with XMLHttpRequest — history, methods/properties, GET, POST, timeouts |
| 05 | WebSockets — full-duplex connections, `ws` server, real-time push |

## Demo Projects

Each demo directory contains `before/` and `after/` subdirectories (or numbered sub-demos) that correspond to the state of the code at different points in the module.

| Directory | Contents |
|---|---|
| [`01-fetch-demos/`](01-fetch-demos/) | Basic `fetch()` GET with the Globoticket app |
| [`02-fetch-deep-dive-demos/`](02-fetch-deep-dive-demos/) | HTTP headers, POST, error handling, AbortController, streaming progress |
| [`03-axios-demos/`](03-axios-demos/) | Axios GET, POST, error handling, download progress |
| [`04-xhr-demos/`](04-xhr-demos/) | XHR GET, POST, timeout handling |
| [`05-websockets-demos/`](05-websockets-demos/) | WebSocket server + client with session-scoped push |

To run any demo:

```bash
cd <demo-dir>/after   # or before/
npm install --registry https://registry.npmjs.org
node index.js
```

Then open `http://localhost:3000` in your browser.

> **Note on `--registry`:** if your machine is configured to use a corporate npm registry (e.g. SAP Artifactory), that registry may require credentials that are expired or unavailable outside of a corporate network. Passing `--registry https://registry.npmjs.org` forces this one install to use the public npm registry instead, bypassing any corporate registry configuration.

## Assets

The [`assets/`](assets/) directory contains educational diagrams extracted from the course slides:

| File | Description |
|---|---|
| `01-http-request-response.png` | HTTP request/response flow between client and server |
| `02-abort-controller.png` | AbortController and AbortSignal usage pattern |
| `03-cors-cross-origin.png` | CORS cross-origin request with Access-Control headers |
| `04-cors-preflight.png` | CORS preflight OPTIONS request flow |
| `05-xhr-history-timeline.png` | XMLHttpRequest history timeline (2001–2005) |
| `06-xhr-timeout.png` | XHR timeout — onload vs ontimeout on a time axis |
