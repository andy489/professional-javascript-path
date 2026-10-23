# Module 2 — Prompt library and resources

**AI-Assisted JavaScript · Turning pseudocode into working JavaScript**

Every prompt used on screen in this module, in the order you saw it, plus the reference pages worth bookmarking. Copy anything here into your own notes and change it to fit your work — that's the point.

Prompts are reproduced exactly as typed. AI output is not deterministic, so your results will differ from the recordings in wording and sometimes in substance. That's normal, and noticing the difference is part of the skill.

---

## The part that happens before any prompt

This module's real technique isn't a prompt at all — it's the plan you write first. The AI turns plans into code far better than it turns wishes into features, and the plan is also the standard you judge the generated code against. Without one, review is just vibes.

Four questions, in this order, before you open the chat:

| Question | For the filter feature |
| --- | --- |
| **What is it, in one plain sentence?** | Picking a priority shows only tasks with that priority; picking All shows everything. |
| **What goes in?** | The array of task objects, and the selected priority from the dropdown. |
| **What comes out?** | A **new** array of matching tasks — the original is never modified. |
| **What are the edge cases, and what should each one do?** | Empty list stays empty. "All" returns everything. An unknown priority matches nothing. A missing selection behaves like "all". |

That last row is the one people skip, and it's the one that matters most. Those aren't facts about JavaScript that the AI can look up — they're decisions about what you want. Nobody can make them for you.

---

## Turning requirements into pseudocode

Ask for the plan, and explicitly hold back the code. Without that last instruction most tools sprint straight to an implementation, and you're not ready to grade an implementation yet.

```
Here's the next feature for my vanilla JavaScript task app:

When the user picks a priority from the filter dropdown, the list shows
only tasks with that priority. Picking "All" shows every task. A missing
selection should behave like "All". An unknown priority matches nothing.

Write pseudocode for this feature. Do not write any JavaScript yet.
Keep it short, and include the edge cases you think matter.
```

**Reuse it for:** any feature big enough that you'd want to think before typing. Pseudocode is cheap to change and code is expensive to change, so the pseudocode is where you do your arguing.

**What to do with the response.** Read it like a plan a colleague handed you, and expect to change it. Three things worth looking for every time:

- **Work you didn't ask for.** The response volunteered an empty-state message — a fine idea, and not this feature. Cut it and park it in a notes file rather than letting it ride into the codebase on the back of an unrelated ticket.
- **Something to add.** A guard for input that isn't a list at all, because that data will come from storage before long.
- **Values that don't match your app.** The pseudocode said `"All"`; the dropdown sends `"all"`. In pseudocode that reads as a nit. In JavaScript it's a filter that silently matches nothing.

---

## Turn this pseudocode into JavaScript

Once the plan is approved, convert it one small piece at a time. Pure logic first, wiring second.

```
Turn this pseudocode into JavaScript.

Constraints:
- Create logic.js and export filterTasksByPriority from it as a pure
  function. No DOM access in that file.
- Return a new array. Never modify the tasks array I pass in.
- Only the filtering function for now — don't wire up the dropdown yet,
  and don't change app.js.
```

**Reuse it for:** any approved plan. The constraints doing the work here are *pure function*, *no DOM*, *return a new array*, and *only this piece*.

Then the wiring, as its own request:

```
Now wire it up in app.js: import filterTasksByPriority from logic.js,
and when #filter-select changes, render only the filtered tasks.
Reuse the existing renderTasks approach — smallest change possible.
```

**Reuse it for:** connecting new logic to existing code. "Smallest change possible" is the phrase that keeps a two-line job from becoming a refactor.

And before you call it done:

```
Explain the final filterTasksByPriority function and the app.js changes
as if I have to defend them in a code review.
```

**Reuse it for:** any code you're about to own. If something in the explanation surprises you, that's not a detail — it's a gap between what you approved and what you got.

---

## Checking the logic with quick tests

### Scrappy checks in the browser console

Fast confidence while you're still in the flow. Note the first line: once `app.js` is a module, its imports live in module scope and aren't reachable from the console, so you have to pull the function in by name.

```javascript
const { filterTasksByPriority } = await import("./logic.js");

const sample = [
  { title: "Ship report", priority: "high" },
  { title: "Water plants", priority: "low" },
];
console.assert(filterTasksByPriority(sample, "high").length === 1);
console.assert(filterTasksByPriority(sample, "all").length === 2);
console.assert(filterTasksByPriority([], "high").length === 0);
```

Silence is success — `console.assert` only speaks up when an assertion fails.

**Reuse it for:** a thirty-second sanity check before you commit to writing real tests. Just remember these evaporate when you close the tab.

### Generating the test setup

This project had no test runner. Adding one is chore work, which makes it good work to hand over — with the install held back deliberately, so the review happens before anything runs.

```
Set this project up to run unit tests with Vitest.

Constraints:
- Add package.json and vitest.config.js. Don't touch app.js, logic.js,
  index.html, or styles.css.
- Vitest and jsdom as dev dependencies. Nothing else.
- Use the jsdom test environment — logic.js is where our save-and-load
  code will live, and plain Node has no localStorage.
- Add a "test" script. Nothing else: no linter, no CI config.
- Write the files only — don't run npm install. I'll install once I've
  read them.
```

**Reuse it for:** any tooling setup. And give this diff your slowest read: `package.json` is the file that can run code on your machine at install time, so it deserves more suspicion than application code ever does. Check the dependency list against what you actually asked for.

### Generating the tests

```
Generate Vitest tests for filterTasksByPriority in logic.test.js, based
on this plan: matching priorities are returned in a new array, "all"
returns every task, a missing selection behaves like "all", an unknown
priority returns an empty array, and an empty list returns an empty
array. Small sample data, one behavior per test.
```

**Reuse it for:** turning a plan into a test suite. Feed it the edge cases you decided on — the tests are only as good as the plan behind them, and a wrong test is worse than no test because it certifies the wrong behavior.

### Then break it on purpose

There's no prompt for this one, and it's the most valuable habit in the module.

When the suite goes green on the first run, you've learned less than it feels like. A test that has only ever been green is a test you haven't checked — it might be asserting nothing at all. So change one line of working code, watch a specific test go red, and put it back. Ten seconds, and now you know two things instead of one: the code does what the plan says, **and** the tests would tell you if it stopped.

---

## Pair coding without surrendering control

```
Show me 3 cleaner ways to write this.
```

**Reuse it for:** any working code you'd like a second opinion on. Weekly, on your own code, is not too often.

**What to do with the response.** You'll usually get options plus a recommendation. Treat both as proposals:

- **Cleverness that costs readability isn't clean.** An option that's structurally elegant but hides what it does inside an expression is a puzzle for every future reader, including you in six months.
- **Answer its best argument, don't ignore it.** When a version exists to protect against a future mistake, ask whether something else already protects you — a test you've watched fail, for instance.
- **You can disagree with its ranking.** Rejecting output isn't a failure state, and neither is picking the option it listed second.
- **Behavior should not change**, so re-run the tests. That's what makes a refactor a refactor rather than a rewrite.

Then close the loop, so the next round starts closer to where you want it:

```
I'm keeping option A, not your recommendation. Two preferences for this
project from now on: prefer code that's obvious on first read over code
that's structurally clever, and spell out comparisons rather than
using == null.
```

**Reuse it for:** every rejection. Each one can narrow the next prompt, which is how a generic assistant gradually becomes yours.

---

## Reference links

### JavaScript

- [`Array.prototype.filter()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) — returns a new array; never modifies the original
- [`Array.prototype.slice()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) — with no arguments, a shallow copy
- [`Array.isArray()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)
- [`Set`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) — used to name the "means everything" values as data
- [Equality comparisons and sameness](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness) — `==` vs `===`, and the SameValueZero rule `Set.has()` uses

### Modules

The filtering logic moved into its own file, which turned the app into an ES module — a change with consequences worth understanding.

- [JavaScript modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) — the guide, including why modules need a server
- [`export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)
- [`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
- [`import()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import) — the dynamic form, which is how the console reaches a module

### Testing

- [Vitest](https://vitest.dev) — getting started
- [`test.environment`](https://vitest.dev/config/#environment) — the config option this project sets to `jsdom`
- [`expect`](https://vitest.dev/api/expect) — the assertion API
- [jsdom](https://github.com/jsdom/jsdom) — the simulated browser that gives tests a `localStorage`
- [Console API](https://developer.mozilla.org/en-US/docs/Web/API/console) — including `console.assert()`

### Running the app after this module

Once `index.html` loads `app.js` as a module, **opening the file directly stops working.** You'll see a CORS error in the console. This is not a bug in your code and not a quirk of your browser — modules are fetched over HTTP, and `file://` isn't HTTP.

Serve it instead:

- [Live Server for VS Code](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) — right-click `index.html` → Open with Live Server
- Or from a terminal in the project folder: `npx serve` or `python3 -m http.server`

---

## Keep from this module

1. **Write the plan before the prompt.** Inputs, outputs, and — above all — what each edge case should do.
2. **Ask for pseudocode and forbid the code.** It's the cheapest place to catch scope creep and wrong assumptions.
3. **Convert in small pieces.** Pure logic, then wiring, then an explanation you could defend.
4. **Never trust a suite you haven't seen fail.** Break one line on purpose and put it back.
5. **"Show me 3 cleaner ways to write this."** Then judge them — including the one it recommends.
