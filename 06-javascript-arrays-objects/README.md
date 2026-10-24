# JavaScript Arrays and Objects

A deep dive into how JavaScript objects and arrays work under the hood — from prototype chains and property descriptors to reference semantics, deep copying, array manipulation, and functional iteration patterns.

All modules are consolidated into a single notebook: [`javascript-arrays-objects.ipynb`](javascript-arrays-objects.ipynb)

## Modules

| # | Title | Topics |
|---|---|---|
| 01 | Course Overview | Common points of confusion, course scope |
| 02 | Prototypes and Properties | What is an Object, prototype chain, creating objects three ways, property CRUD, protecting and enumerating properties |
| 03 | Object References and Scope | Stack vs. heap, reference semantics, shallow vs. deep copy, functions as properties, `this`, primitive wrappers |
| 04 | Arrays | Arrays as objects, five creation methods, identification, element access, splice/slice, concat, cloning, sorting, sparse arrays, Maps/Sets/Typed Arrays |
| 05 | Array Iteration Deep Dive | For loop comparison, `forEach`, summarising (`reduce`, `join`, `some`, `every`), searching (`find`, `filter`, `includes`), `map` and functional JS |

## Assets

The [`assets/`](assets/) directory contains 10 educational diagrams extracted from the course slides:

- `01-objects-reference-types.png` — primitives vs. reference types memory layout
- `02-prototype-chain-traversal.png` — prototype chain traversal diagram
- `03-property-iteration-matrix.png` — `for...in` / `Object.keys` / `getOwnPropertyNames` comparison matrix
- `04-stack-vs-heap.png` — stack and heap memory model
- `05-stack-heap-two-objects.png` — two objects at different heap addresses
- `06-shallow-copy-shared-ref.png` — shallow copy sharing a nested object reference
- `07-deep-copy-nested.png` — deep copy creating fully independent object trees
- `08-course-object-structure.png` — five ways to create arrays (code slide)
- `09-array-functions-compared.png` — `push`/`pop`/`shift`/`unshift` visual comparison
- `12-class-diagram.png` — User → Course → Author domain model

## Usage

Open the notebook in JupyterLab or VS Code. The `render_diagram` helper function (defined in the second cell) uses Python/IPython to display the diagram PNGs inline — run that cell first before running any diagram cells.
