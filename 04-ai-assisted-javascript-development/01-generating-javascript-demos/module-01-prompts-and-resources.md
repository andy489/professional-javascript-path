# Module 1 — Prompt library and resources

**AI-Assisted JavaScript · Generating and understanding JavaScript with AI**

Every prompt used on screen in this module, in the order you saw it, plus the reference pages worth bookmarking. Copy anything here into your own notes and change it to fit your work — that's the point.

Prompts are reproduced exactly as typed. AI output is not deterministic, so your results will differ from the recordings in wording and sometimes in substance. That's normal, and noticing the difference is part of the skill.

---

## The five-part prompt structure

Most of the prompts below are built from the same five parts. You won't always need all five — a quick syntax question needs two — but when a result matters, walking the list is what turns a vague ask into a specific one.

| Part | What goes here |
| --- | --- |
| **Goal** | The outcome you want, in one sentence. |
| **Context** | The project, the stack, the code you're working in. Paste the actual code. |
| **Constraints** | The boundaries. Often the most valuable part: what *not* to do. |
| **Inputs and outputs** | The shape of what goes in and what should come back. |
| **Ask** | The specific request, and the form you want the answer in. |

Blank template to copy:

```
Goal:

Context:

Constraints:
-
-

Inputs and outputs:
-

Ask:
```

A detailed prompt pays you twice. It gets you a more predictable result, **and it becomes your review checklist** — you already wrote down what you wanted, so reviewing the output is walking a list instead of judging on impression.

---

## Generating the project scaffold

One prompt, three files. Note how much of it is constraints, and that it deliberately asks for an *unfinished* project.

```
Goal: Create the starter files for a small vanilla JavaScript browser app
called Task Prioritizer. This is a teaching starter, so the HTML and CSS
should be finished and the JavaScript should be deliberately incomplete.

Context: The app lets someone type a task, give it a priority, and see it
in a list. I'm going to write the behavior myself, so I want the shell and
nothing more. No build step, and it will be served as static files.

Constraints:
- Three files only: index.html, styles.css, app.js.
- No frameworks, no libraries, no dependencies, no build tooling.
- Clear, beginner-friendly names. No clever abstractions.
- Do not implement adding, rendering, filtering, or saving.

Inputs and outputs:
- index.html: a text input (id "task-input"); a priority select with
  options high, medium, and low (id "priority-select"); an Add button
  (id "add-button"); a second select for filtering the list with options
  all, high, medium, and low (id "filter-select"); an empty <ul>
  (id "task-list"); and <script src="app.js"></script>.
- styles.css: a simple, readable layout, plus classes task-high,
  task-medium, and task-low so priority is visible at a glance.
- app.js: element lookups named taskInput, prioritySelect, addButton,
  filterSelect, and taskList; a createTaskElement(task) helper that builds
  an <li>, sets its class to `task task-${task.priority}`, puts task.title
  into a <span> as plain text, appends the span, and returns the element;
  and a TODO comment marking where the task storage, add, and render
  behavior will go.

Ask: Create those three files, then give me a two-sentence summary of what
is in each one.
```

**Reuse it for:** standing up any small project from nothing. Swap the file list, the element names, and the "do not implement" line for whatever you want to build yourself.

---

## Asking clear JavaScript questions

### The vague version — included as the counter-example

```
What's the difference between const and let?
```

You'll get an accurate, well-organized tour of the topic. What you won't get is a decision about the line you're actually writing. Keep this one as a reminder of the difference.

### The same question, structured

```
Goal: Decide how to declare the collection that holds my tasks.

Context: This is a vanilla JavaScript task app. The variable will hold an
array of task objects, and I'll add tasks to it with push() as the user
creates them. This is the line I'm about to write:

const tasks = [];

Constraints: Modern JavaScript, no frameworks.

Ask: Should this be const or let, and why? Keep it short, with one small
example using a tasks array like mine.
```

**Reuse it for:** any "which should I use here?" question. The part that does the work is pasting the real line you're about to write.

### Iterating instead of starting over

```
Give me a one-sentence rule I can remember for choosing const or let.
```

**Reuse it for:** turning a long correct answer into something you'll actually retain. When an answer isn't quite right, narrow it — don't start a new conversation.

### Getting to the source

```
Get me the MDN Web Docs URL for JavaScript's const.
```

**Reuse it for:** jumping straight to canonical documentation. Use the assistant to *find* the source; read the source yourself.

---

## Generating boilerplate without turning off your brain

```
I'm building a small vanilla JavaScript task app. The HTML and CSS are
finished, and app.js already selects the elements I need and includes a
createTaskElement(task) helper.

Generate only the JavaScript needed to:
1. Store tasks in an array. Each task has a title and a priority.
2. Add a task when the Add button is clicked, using the text input and
   the priority select.
3. Render all tasks into the #task-list element using createTaskElement.

Constraints:
- No frameworks, no new files.
- Clear, beginner-friendly function names.
- Don't rewrite the code that's already in app.js.
- Leave the filter dropdown alone for now; I'll wire that up later.
- After the code, briefly explain what each function does.
```

**Reuse it for:** any bounded chunk of behavior in an existing file. The three constraints that matter most: don't rewrite what's already there, stay out of the parts you're not working on, and explain the result afterward.

**The habit that goes with it:** read every line before accepting. Anything in the output that wasn't in your prompt gets a deliberate yes or no from you — keep what you can justify, change what you can't.

---

## Using AI to explain unfamiliar code

Select the code first. Your assistant will show you what it picked up — in Claude Code, the prompt box reports how many lines are selected — so you always know what it is looking at before you ask.

```
Explain this function like I'm brand new to programming.
```

**Reuse it for:** any code you didn't write, in any language. Asking for the beginner explanation is not an admission of anything; it's the fastest route to an explanation with no assumed knowledge in it.

Then chase the follow-ups. That's where the learning is.

```
Does document.createElement put the element on the page immediately? And where does this element actually appear in my app?
```

```
Why does this code use textContent instead of innerHTML to show the task title?
```

```
Get me the MDN Web Docs URL for the textContent property.
```

**Reuse them for:** the shape matters more than the specifics. Ask *when* something happens, ask *where* it connects to the rest of your code, and ask *why* a particular choice was made — that third question is the one that surfaces reasoning you'd otherwise walk past.

**The final test:** close the chat and explain the code out loud in your own words. If you can't, ask another question until you can.

---

## Reference links

### JavaScript

- [`const`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const) — prevents reassignment, does not make the value immutable
- [`let`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
- [`Array.prototype.push()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
- [Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) — the backtick strings used to build class names

### The DOM APIs used in this module

- [`document.getElementById()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)
- [`document.querySelector()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector) — the more flexible alternative, worth knowing
- [`document.createElement()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement) — builds an element in memory only
- [`Node.appendChild()`](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild) — the step that actually puts it on the page
- [`Element.replaceChildren()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/replaceChildren) — empties an element, or swaps its contents in one call
- [`Node.textContent`](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent) — plain text in, no HTML parsing
- [`Element.innerHTML`](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML) — parses the string as markup, which is why it needs care
- [`EventTarget.addEventListener()`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

### Why `textContent` instead of `innerHTML`

- [Cross-site scripting (XSS)](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting) — MDN glossary
- [XSS](https://owasp.org/www-community/attacks/xss/) — OWASP, if you want the deeper version

### The tools

Interfaces and settings pages move often. If a link or a menu has shifted, the four things to look for in any AI editor are the same: **which model** is answering, **how much reasoning** it's doing, **what context** it can see, and **how much autonomy** it has before checking back with you.

- [GitHub Copilot documentation](https://docs.github.com/en/copilot) — repository instructions go in `.github/copilot-instructions.md`
- [Copilot in VS Code](https://code.visualstudio.com/docs/copilot/overview)
- [Cursor documentation](https://docs.cursor.com) — project rules go in `.cursor/rules/*.mdc`, one scoped rule per file
- [Claude Code documentation](https://docs.claude.com/en/docs/claude-code) — project instructions go in `CLAUDE.md` at your repository root

### Running the project

- [Live Server for VS Code](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) — serves the app with no build step
- [Node.js](https://nodejs.org) — LTS release
- [Vitest](https://vitest.dev) — used later in the course for testing the app's pure functions

---

## Start your own prompt library

The most valuable thing in this file isn't any single prompt — it's the habit of keeping them. Every time a prompt earns its keep, save it with a note about what it was for. Within a few months you'll have a personal library that's worth more than any list somebody else wrote, because it's shaped around the work you actually do.

Three worth keeping from this module, regardless of language or framework:

1. **"Explain this function like I'm brand new to programming."** — for code you didn't write.
2. **The five-part structure** — for anything where the result matters.
3. **A constraint-heavy generation prompt** — because the constraints, not the request, are what make the output predictable.
