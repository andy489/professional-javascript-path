# Module 4 — Prompt library and resources

**AI-Assisted JavaScript · Owning AI-assisted code**

Every prompt used on screen in this module, in the order you saw it, plus the reference pages worth bookmarking. Copy anything here into your own notes and change it to fit your work — that's the point.

Prompts are reproduced exactly as typed. AI output is not deterministic, so your results will differ from the recordings. That's normal, and noticing the difference is part of the skill.

---

## Two things to do before you delegate anything

### 1. Commit first

This is the single most practical habit in the module. When an agent edits four files at once, you need to see exactly what changed — every line, nothing hidden. Version control is how, and VS Code has it built in.

```bash
git init
git add .
git commit -m "Initial Commit"
```

With a `.gitignore` holding at least `node_modules` and `.DS_Store`.

That commit is your line in the sand. Everything the agent does afterwards shows up in the Source Control panel as a readable diff, and anything you don't like is one click away from being undone. **Don't hand an agent a large job in a folder that isn't under version control** — not because it will do something terrible, but because you deserve to see what it did.

### 2. Write your standing rules down

Preferences you give in conversation last until the session ends. Preferences in a file last forever. Claude Code reads `CLAUDE.md` at your project root; Copilot reads `.github/copilot-instructions.md`; Cursor reads `.cursor/rules/*.mdc`. Same idea in all three.

Worth putting in one: your project's structure, your commands, and the style calls you've already made once and don't want to make again.

But remember what it is and isn't. **A rules file sets defaults; it doesn't set scope.** Every individual request still has to say what it wants and what it doesn't.

---

## The AI code review checklist

Use this on any diff an agent hands you. It's the same review you'd want from whoever merges your pull request.

| Check | The question |
| --- | --- |
| **Explainable** | Can I explain every line, without the AI in the room? |
| **Correct** | Does it meet the requirement I actually stated? |
| **Dependencies** | Anything new installed? Anything touching `package.json`? |
| **Tests** | Weakened, deleted, or missing for the new code? |
| **Scope** | Anything here I didn't order? |
| **Readable** | Would the next person understand this? |

Anything that fails a check gets a question, not a shrug — and the answer decides whether it stays.

---

## Reviewing an agent's work like a pull request

```
Add the ability to mark a task as complete.

Requirements:
- Give each task a stable id when it's created.
- Each task in the list gets a checkbox that toggles completion.
- Completed tasks get a "task-completed" class, and add a style for it
  in styles.css.
- Completed state persists with the rest of the task data.
- Keep the existing structure: pure logic in logic.js, only storage.js
  touches localStorage, DOM work in app.js.
- Keep existing function names. No new dependencies. Don't change
  index.html.
```

**Reuse it for:** any bounded feature you're willing to hand over whole. The constraints doing the work are the structural ones — where code is allowed to live, what must not be touched, and no new dependencies.

**What came back was more than was asked for**, and this is where the real skill lives. Unrequested changes fall into three groups, and only one of them is easy:

- **Obvious scope creep** — a button nobody asked for. Delete it, move on.
- **Necessary consequence** — you asked for stable ids, so something has to generate them. Fine.
- **Better than your requirements** — a migration function that backfills fields on data saved before the feature existed. You didn't think of it. It did.

That third category is the hard one, because the tempting move is to wave everything through on the strength of the good one. So make each change answer for itself:

```
Three of these weren't in my requirements: nextTaskId, createTask, and
normalizeTasks. For each, one sentence: why is it there, and what
breaks without it? Also, why did tasks stop being const?
```

**The point isn't the verdict, it's the process.** You might keep all of them. What matters is that you kept them because you asked and the answers held — not because they looked reasonable.

Then verify by running the app *and* the tests, and commit the reviewed change. The same version control that made the diff readable is what records what you actually accepted.

---

## Overruling the AI

With real autonomy, a plain request gets *executed*, not proposed. If you want something you can decline, say so:

```
Show tasks in the list with the highest priority first.

Give me your plan first — don't change any files yet.
```

**Reuse it for:** anything you'd rather approve than undo. This is the same instinct as asking for pseudocode before code, and for a root cause before a fix — one rung further up the autonomy ladder.

**Then read the plan and find the decisions.** A good plan doesn't remove your job; it shows you where your job is:

- **Decisions it refuses to make.** A well-behaved agent will stop at the edge of a product question and ask rather than assume. *Where should completed tasks sort?* isn't a coding question. Answer it, or defer it deliberately.
- **Decisions it made with the wrong context.** It may choose a conservative option for a general reason — browser support, for instance — that doesn't apply to your project. It has a general rule; you know who this code is for.
- **Things it protected that you'd forgotten.** It may decline an approach because an existing test depends on current behaviour. Read that reasoning; it's often the most valuable part of the response.

Accepting with amendments beats accepting wholesale:

```
Good plan — go ahead, with two changes.

Use toSorted rather than spread-then-sort. It's baseline now and this
project targets modern browsers.

Leave completed tasks where they fall — that's a separate rule and I'm
not deciding it in this change.

And yes to the tests.
```

**The principle:** AI output is a proposal, not a verdict. Sometimes the proposal is excellent, and it's *still* yours to rule on. The measure of a good AI partner isn't that it never needs overruling — it's that it does the work well, shows you plainly where the decisions are, and leaves them with you.

---

## The capstone: the whole loop on one feature

### 1. The plan, in writing, with edge cases

The plan is what "correct" means. Without it, review is impression.

```
Feature: a summary line above the task list.

Behavior:
- Normally: "3 of 5 tasks remaining · 2 high priority" — remaining
  means not completed; the high count is remaining tasks only.
- No tasks at all: "No tasks yet — add your first one."
- Everything complete: "All tasks complete."

Plan:
1. Add a <p id="summary"> above the task list in index.html.
2. Pure function summarizeTasks(tasks) in logic.js returning
   { total, remaining, high }.
3. app.js formats the message and renders it into #summary.
4. Vitest tests: normal case, empty list, all complete, no high tasks.

Write pseudocode for summarizeTasks first. No JavaScript yet.
```

**Reuse it for:** any feature worth doing properly. Note it asks for pseudocode and forbids JavaScript — the plan gets approved before code exists, because pseudocode is the cheapest place in the world to find a mistake.

**Expect the plan to come back with questions.** Some will be trivial. Some will expose a gap in *your* plan — and finding that here, before a line of JavaScript exists, is the whole reason this step is worth the minute it costs.

### 2. The five words that carried the course

```
Turn this pseudocode into JavaScript. summarizeTasks goes in logic.js,
pure, no DOM. Add the <p id="summary"> to index.html, then the smallest
app.js change to render the message into it whenever the list
re-renders.

The summary reports the whole task list, not the filtered view.
```

Then read it like a reviewer, run it in the browser, and check the tests.

### 3. The ownership test

```
Explain summarizeTasks and the render changes well enough that I could
defend every line in a code review without you in the room.
```

**Then close the panel and say it back in your own words.** If you can, the feature is yours. If you can't, ask another question until you can.

That's what finished means: planned by you, drafted fast with a partner, verified by tests, and explainable by the person whose name goes on the commit.

---

## Reference links

### Version control

- [VS Code Source Control](https://code.visualstudio.com/docs/sourcecontrol/overview) — the diff view this module runs on
- [Git documentation](https://git-scm.com/doc)
- [gitignore](https://git-scm.com/docs/gitignore)

### Rules files

- [Claude Code memory and CLAUDE.md](https://docs.claude.com/en/docs/claude-code/memory)
- [GitHub Copilot documentation](https://docs.github.com/en/copilot) — repository instructions live in `.github/copilot-instructions.md`
- [Cursor documentation](https://docs.cursor.com) — project rules live in `.cursor/rules/*.mdc`

### JavaScript in this module

- [`Array.prototype.toSorted()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted) — returns a new sorted array; cannot mutate by accident
- [`Array.prototype.sort()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) — sorts in place, and is stable in every current engine
- [Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

### Testing

- [Vitest](https://vitest.dev) and [`expect`](https://vitest.dev/api/expect)

### On the research

The opening clip cites two studies that point in opposite directions, which is the honest state of the evidence. Both are worth finding and reading rather than taking second-hand:

- **GitHub's 2022 Copilot productivity research** — developers completed a bounded JavaScript task roughly 55% faster with an AI assistant. Published on the GitHub blog under Research.
- **METR's 2025 randomised trial** — experienced open-source developers working in large, mature codebases they knew well took roughly 19% *longer* with AI tools, while believing they had been faster. [metr.org](https://metr.org)

The reconciliation is the useful part: the speedup is real when the task is bounded and review is cheap, and it evaporates when reviewing costs more than doing.

---

## Keep from this module

1. **Commit before you delegate.** Then the diff is readable and the undo is one click.
2. **Write your standing rules into a file** — and remember it sets defaults, not scope.
3. **Ask for the plan** before an autonomous tool starts editing.
4. **Run the review checklist on every diff**, and make unrequested changes answer for themselves.
5. **Accept with amendments**, not wholesale.
6. **The ownership test:** close the panel and explain it in your own words.

---

## The whole course, in one loop

Each module added a step. Here it is end to end:

**Plan** it yourself — inputs, outputs, and what each edge case should do.
**Prompt** with enough context that the answer can be specific.
**Read** every line that matters, and skim only what fails loudly.
**Run** it.
**Test** it — and watch a test fail at least once, so you know the suite has teeth.
**Refine** what isn't right, and say no when the change outgrows the problem.
**Own** it — you can explain it with the AI turned off.

The AI brings speed. You bring judgment, standards, and the final word.
