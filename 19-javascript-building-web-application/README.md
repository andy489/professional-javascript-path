# Building a Web Application with JavaScript

A practical end-to-end guide to planning, building, styling, coding functionality, and publishing a JavaScript web application. All concepts are illustrated through the **Dad Jokes** app — a full-stack Node.js/Express application backed by a MySQL database.

All modules are consolidated into a single notebook: [`building-a-web-application-with-javascript.ipynb`](building-a-web-application-with-javascript.ipynb)

## Modules

| # | Title |
|---|---|
| 01 | Planning Your App and Setting Up the Project |
| 02 | Building the Layout, Style, and CRUD with HTML and CSS |
| 03 | Coding Your App's Functionality in JavaScript |
| 04 | Publishing Your App |

## Demo Project

| Directory | Description |
|---|---|
| [`04-dadjokes-demos/`](04-dadjokes-demos/) | Complete Dad Jokes web app (Node.js + Express + MySQL) |

The demo includes the full server code, all HTML views, front-end JavaScript, database setup SQL scripts, and npm configuration.

## Diagrams

Educational diagrams are stored in [`assets/`](assets/):

| File | Content |
|---|---|
| `01-javascript-runtimes.png` | Browser vs. Node.js runtime environments |
| `02-web-app-architecture.png` | Basic JavaScript web app three-tier architecture |
| `03-app-components-architecture.png` | Dad Jokes app full component architecture |
| `04-cicd-javascript.png` | CI/CD pipeline stages for JavaScript apps |
| `05-dadjokes-app-architecture.png` | Final Dad Jokes app architecture with styled UI |

## Setup

Install dependencies for the demo project:

```bash
cd 04-dadjokes-demos
npm install
```

Create and seed the database using the SQL scripts in `04-dadjokes-demos/setup/createdbandinsertjokes/`, then start the server:

```bash
node index.js
```
