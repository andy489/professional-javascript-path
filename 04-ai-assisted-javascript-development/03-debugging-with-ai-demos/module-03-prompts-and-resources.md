# Module 3 — Prompt library and resources

**AI-Assisted JavaScript · Debugging JavaScript faster with AI**

Every prompt used on screen in this module, in the order you saw it, plus the reference pages worth bookmarking. Copy anything here into your own notes and change it to fit your work — that's the point.

Prompts are reproduced exactly as typed. AI output is not deterministic, so your results will differ from the recordings. That's normal, and noticing the difference is part of the skill.

---

## The debug evidence pack

This is the tool the whole module runs on. It's just a good bug report — because that's exactly what your AI is picking up, with zero context and no memory of what you were doing.

| Field | What goes here |
| --- | --- |
| **Expected** | What should have happened. |
| **Actual** | What happened instead. |
| **Exact error** | Word for word, including the type. If there's no error, say so — that's information too. |
| **Relevant code** | The function, or a pointer to the file if your tool can read it. |
| **Input** | The actual data or actions that triggered it. |
| **Recently changed** | What moved lately. Bugs cluster around change. |
| **Already tried** | So it doesn't hand you back the thing you just ruled out. |

Blank template to copy:

```
Expected:
Actual:
Exact error:
Relevant code:
Input:
Recently changed:
Already tried:

Give me 2–3 likely causes and the smallest next experiment for each.
```

That closing line is the part people skip, and it's the part that matters. **Ask for causes, plural, and an experiment — not "the fix."** It keeps you in the investigator's chair and turns the AI into a fast brainstorming partner rather than an oracle.

You won't always need all seven fields. Sixty seconds of filling them in generally saves three rounds of vague back-and-forth.

---

## Fixing a runtime error

Runtime errors are the friendly bugs: they hand you a message, a stack, and a line. Read the error yourself **before** you prompt — that's fifteen seconds, and it's evidence you'd otherwise be asking the AI to guess at.

```
I'm debugging a runtime error in my vanilla JS task app.

Expected: clicking Add creates a task and renders it in the list.
Actual: nothing renders.
Exact error: Uncaught TypeError: Cannot read properties of null
(reading 'value'), thrown from `const title = taskInput.value.trim();`
inside addTask.
Input: typed "Ship report", priority High.
Recently changed: a teammate refactored app.js and added persistence.
Already tried: confirmed the error points at the line reading taskInput,
so taskInput is null.

Relevant code is in app.js — the element selections are at the top.

Give me 2–3 likely causes and the smallest next experiment for each.
```

**Reuse it for:** any thrown error. Note that "Relevant code" points at a file rather than pasting it — an assistant that can read your project will go and look, and it'll cross-reference files faster than you can.

**What to expect back, and what to do with it.** An agent with file access often won't hand you a list of maybes — it'll go read the code and come back with a confirmed cause. That's genuinely useful, and it changes your job rather than removing it:

- **It read your code. It did not see your app fail.** Your evidence pack supplied everything about runtime — what you clicked, what threw, what changed last week. That half is still yours to provide, and it's why the pack still matters.
- **Confidence is not proof.** It will say "confirmed" in exactly the same tone whether it's right or wrong. Run the experiment anyway.
- **It may offer to apply the fix.** For a three-character change, typing it yourself is faster than reviewing a diff. That prompt is a review gate — the bigger the job, the more it matters how you answer it.

The experiment for this one was a single line in the console:

```javascript
document.getElementById("task-inpt");
```

Then the smallest possible fix. No renaming, no tidying up while you're in there. One bug at a time.

---

## Debugging a logic error

No message, no stack, no line number — the app is simply wrong. This is where the evidence pack earns its keep, because there's nothing else for the AI to work from.

```
Why is this loop failing?

Expected: with selectedPriority "high", only high-priority tasks are
returned. Actual: every task is returned, and afterward every task's
priority has changed to "high".

Sample input:
[
  { title: "Ship report", priority: "high" },
  { title: "Water plants", priority: "low" }
]

Determine the root cause. Only report.
```

**Reuse it for:** any "it runs but it's wrong" bug. Three things make this prompt work: expected versus actual stated precisely, **real sample data**, and asking for the root cause rather than a patch.

**Then trace it yourself.** The AI's answer is a hypothesis until you've walked the code with the sample data and watched it produce the wrong result. When one cause explains *every* symptom — including the weird one you almost didn't mention — you've usually found it.

**The bug in this clip is worth memorising.** A single `=` where `===` belonged: the assignment writes to the object, evaluates to the value written, and a non-empty string is truthy, so the condition always passed. It corrupted the data on the way through. Your eyes skip single characters; this is what tests are for.

---

## Getting a second opinion

When there's no error to anchor on, one confident answer isn't much to go on. Open a second session and run the *identical* evidence pack.

```
Expected: tasks persist across a page refresh.
Actual: after refresh the list is empty. No console errors.
Evidence: localStorage has key "task-prioritizer.tasks" with a valid
JSON array string. Saving works; loading doesn't.
Code: loadTasks in storage.js, and the restore block in app.js that
calls it.

Give me 2–3 likely causes and the smallest next experiment.
```

**Make the second opinion as independent as you can.** Fresh session, no shared context — and switch the model while you're at it. Same evidence, different reader.

**Then read the two answers against each other:**

- **If they agree on the cause**, that's a stronger signal than one confident run. Confidence is free; independent agreement isn't.
- **Look at the route, not just the verdict.** One may read your files then answer; another may reason from the evidence first and check itself afterwards. Their second and third candidates are often completely different, and that difference is a wider map of the territory than either gave you alone.
- **Agreement still isn't proof.** Both of them read your code. Neither watched your app fail.

So settle it with an experiment — ideally the one it proposed:

```javascript
const restored = (await import("./storage.js")).loadTasks();
console.log(typeof restored, Array.isArray(restored));
```

**One lesson hiding in this bug:** be a little suspicious of your own defensive code. A guard that quietly discards bad input turns a loud failure into a silent one, and silent failures are the ones that reach production. When you verify, check the *shape* of your data, not just the absence of errors.

---

## Turning each bug into a test and a lesson

The last step of debugging isn't the fix. Two moves, and they take about five minutes together.

### Lock it in with a regression test

```
Add a Vitest regression test to logic.test.js: filtering by "high" must
return only matching tasks AND must not modify any task in the input
array. Name it so a future reader knows it guards against an assignment
typo in the filter condition.
```

**Reuse it for:** every bug you fix that logic can reach. Name the test so a future reader knows what it's guarding against. If anyone — human or AI — reintroduces the bug, it fails in seconds instead of in front of users.

### Write the lesson down

```
For the three bugs we fixed in this session — the typo'd element id, the
= instead of === in the filter, and the missing JSON.parse — write a
lessons-learned.md in the project root.

One entry per bug: the root cause in a sentence, and how to catch it
earlier next time. Then a Prompts section at the bottom holding the
evidence pack template we used all session.

Keep it short enough that I'll actually reread it.
```

**Reuse it for:** the end of any real debugging session. Two details worth copying: it writes into the **repo**, so the lesson lives with the code and gets committed where the next person will find it; and it carries your prompt templates along, so your prompt library grows from work you actually did.

Read the file it produces. It's generated content like anything else.

### And run the tests you already have

The suite written two modules earlier had been failing this whole time, and nobody ran it. Two of the three bugs were beyond its reach — a mistyped element id and a missing `JSON.parse` live in code pure-function tests don't touch — but the third was four seconds away the entire session.

**A test suite nobody runs is a suite you don't have.**

---

## Reference links

### The errors and APIs in this module

- [`TypeError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError) — what "Cannot read properties of null" is
- [`document.getElementById()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById) — returns `null` when nothing matches, which is why the failure arrives later than the typo
- [`JSON.parse()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) and [`JSON.stringify()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)
- [`Window.localStorage`](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) — strings in, strings out, always
- [`Array.isArray()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)

### Why a single `=` was so hard to see

- [Assignment (`=`)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment) — an assignment is an expression, and it evaluates to the value assigned
- [Strict equality (`===`)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality)
- [Truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy) and [Falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) — a non-empty string is truthy, which is what made the broken condition always pass

### Reaching module code from the console

Once your app loads as a module, its imports live in module scope and the console can't see them. Pull what you need in by hand:

- [`import()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import) — the dynamic form, which works in the DevTools console

### DevTools

- [Console overview](https://developer.chrome.com/docs/devtools/console/)
- [Viewing localStorage](https://developer.chrome.com/docs/devtools/storage/localstorage/) — the Application panel, where the evidence for the persistence bug was sitting the whole time

### Testing

- [Vitest `expect`](https://vitest.dev/api/expect) — for writing the regression test

---

## Keep from this module

1. **The evidence pack.** Seven fields, then *"give me 2–3 likely causes and the smallest next experiment."*
2. **Read the error yourself first.** Fifteen seconds, and it's evidence the AI would otherwise be guessing at.
3. **Treat every answer as a hypothesis**, however confident it sounds — then test it.
4. **A second opinion costs thirty seconds.** Fresh session, different model, identical evidence.
5. **Smallest fix, one bug at a time.** A fix that grows while you're making it is how a debugging session becomes an afternoon.
6. **Make each bug pay rent:** a regression test, and a written lesson that lives in the repo.
