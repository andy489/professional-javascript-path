# WebAssembly Interaction with JavaScript

WebAssembly (Wasm) is a binary instruction format that enables near-native performance in web browsers and beyond. This course covers the full lifecycle of WebAssembly interaction with JavaScript — from loading and instantiation through memory management, function interop, exception handling, server-side runtimes, and the toolchains used to compile C/C++, Rust, and C# to Wasm.

All modules are consolidated into a single Jupyter notebook.

## Notebook

[`javascript-web-assembly-interaction.ipynb`](javascript-web-assembly-interaction.ipynb)

## Modules

| # | Title |
|---|---|
| 01 | Introduction to WebAssembly |
| 02 | Loading Modules with the WebAssembly JavaScript API |
| 03 | Functions |
| 04 | Globals and Memory |
| 05 | Exception Handling and Debugging |
| 06 | Runtimes |
| 07 | Tools and Languages |

## Demos

Each demo directory has `before/` (starting point) and `after/` (completed solution) subdirectories.

| Directory | Module | Contents |
|---|---|---|
| [`02-loading-modules-demos/`](02-loading-modules-demos/) | 02 | `instantiateStreaming`, `compileStreaming`, `validate` |
| [`03-functions-demos/`](03-functions-demos/) | 03 | Function exports, imports, `WebAssembly.Table` |
| [`04-globals-memory-demos/`](04-globals-memory-demos/) | 04 | `WebAssembly.Global`, `WebAssembly.Memory`, C quicksort |
| [`05-exception-handling-demos/`](05-exception-handling-demos/) | 05 | `CompileError`, `LinkError`, `RuntimeError`, `WebAssembly.Tag` |
| [`06-runtimes-demos/`](06-runtimes-demos/) | 06 | Node.js, WASI, Wasmtime + .NET |
| [`07-tools-languages-demos/`](07-tools-languages-demos/) | 07 | Emscripten, Rust + wasm-pack, Blazor |

## Assets

[`assets/`](assets/) contains educational diagrams extracted from the course slides:

- `01-loading-webassembly-pipeline.png` — WebAssembly loading and validation flow
- `02-compilation-pipeline.png` — AOT compilation from Wasm bytecode to native code
- `03-table-instance-isolation.png` — instance isolation and `WebAssembly.Table` motivation

## Running the Demos

Demos that load `.wasm` files via `fetch` must be served over HTTP (not opened from `file://`):

```bash
npx http-server .
# or
python3 -m http.server
```

Node.js demos require Node.js 18+. Wasmtime demos require the [Wasmtime CLI](https://wasmtime.dev) installed. Rust demos require [wasm-pack](https://rustwasm.github.io/wasm-pack/).
