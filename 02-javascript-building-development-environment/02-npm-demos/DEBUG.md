# VS Code JavaScript Debugger Controls

| Button | Shortcut | Action |
|--------|----------|--------|
| Continue / Pause | F5 | Run until next breakpoint (or pause if running) |
| Step Over | F10 | Execute current line, stay in current function |
| Step Into | F11 | Enter the function called on the current line |
| Step Out | Shift+F11 | Finish current function, return to caller |
| Restart | Ctrl+Shift+F5 | Restart the debug session |
| Stop | Shift+F5 | End the debug session |

## Breakpoints

- **Toggle breakpoint**: click the gutter (left of line number), or press **F9**
- **Conditional breakpoint**: right-click the gutter → "Add Conditional Breakpoint"
- **Logpoint**: right-click the gutter → "Add Logpoint" (logs without pausing)

## JavaScript Debug Terminal

Open with: **Terminal → New JavaScript Debug Terminal**  
Any `node` command run in this terminal is automatically debugged — no `launch.json` needed.

---

## Running the Project

### `node index.js` / `npm start`

`index.js` is the entry point of this project. It:
1. Loads `yargs` to parse command-line arguments from `process.argv`
2. Imports `add` and `subtract` from `./calculator`
3. Logs results to the console

Running it directly:
```bash
node index.js
```

Or via the npm script defined in `package.json`:
```bash
npm start        # runs: node index.js
```

`npm start` is a built-in npm alias — no `run` keyword needed.

### `npm run dev`

There is no `dev` script in `package.json` yet. To add one, open `package.json` and add it under `"scripts"`:

```json
"scripts": {
  "start": "node index.js",
  "dev": "node --watch index.js"
}
```

Then run:
```bash
npm run dev
```

`node --watch` (available since Node 18) restarts the process automatically whenever a source file changes — useful during development to avoid manually restarting after every edit.

> `npm run <name>` is used for any script that isn't one of npm's built-in names (`start`, `test`, `stop`). Built-ins can be called without `run`.
