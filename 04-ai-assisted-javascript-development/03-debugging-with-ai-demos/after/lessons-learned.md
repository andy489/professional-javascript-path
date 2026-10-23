# Lessons Learned

Three bugs, all silent — no console errors, no stack traces. That's the theme:
each one failed by producing a wrong *value* rather than by throwing.

## 1. Typo'd element id

**Root cause:** an id in `app.js` didn't match the one in `index.html`, so
`getElementById` returned `null` and the element it fed was never wired up.

**Catch it earlier:** `getElementById` returns `null` for a miss instead of
throwing, so the failure surfaces later and somewhere else. Look up all
elements in one place at module top (as `app.js` already does) and assert they
resolved before any of them get used — a single loop that throws on the first
`null` names the bad id immediately, at load, instead of leaving a dead button.

## 2. `=` instead of `===` in the filter condition

**Root cause:** `task.priority = selectedPriority` assigned instead of
comparing, so the condition evaluated to the assigned value — truthy for
`"high"` — and every task both passed the filter and had its priority
overwritten.

**Catch it earlier:** two symptoms from one character, and the existing
"does not modify" test passed anyway because it only checked array *length*.
When a test claims a function doesn't mutate its input, compare the contents,
not the shape. A linter rule for assignment-in-condition (`no-cond-assign`)
catches this class outright.

## 3. Missing `JSON.parse` on load

**Root cause:** `saveTasks` stringified on the way in but `loadTasks` returned
the raw string, so the restored value was a string where the caller expected an
array.

**Catch it earlier:** the `Array.isArray` guard in `app.js` silently dropped the
bad value — the type check that should have caught the bug is what hid it.
Serialize and deserialize in the same file, written as a pair, so an asymmetry
is visible in one screen. When a guard rejects input, it should say so; a
silent `else` branch turns a type bug into a mystery.

---

## Prompts

The evidence pack that worked all session. Filling it in did half the
diagnostic work before the prompt was even sent.

```
Expected: <what should happen>
Actual:   <what happens instead — every symptom, not just the headline one>
Evidence: <what you already checked and what it showed>
Sample input: <the smallest input that reproduces it>

<the ask: "determine the root cause" / "give me 2–3 likely causes and the
smallest next experiment">
Scope: <"only report" / "just implement, don't run">
```

Two things made it work:

- **Every symptom, not just the headline.** "Every task is returned" alone
  points at the filter logic. "…*and* afterward every task's priority has
  changed" narrows it to one character. The second symptom was the diagnostic.
- **State the scope.** "Only report" and "don't run the tests" kept the answer
  to the question asked instead of a pile of unrequested edits.

When the cause isn't obvious, ask for *ranked causes plus the smallest next
experiment* rather than a fix — the experiment is usually two lines in a
console and rules out the rest.
