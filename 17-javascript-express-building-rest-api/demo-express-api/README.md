# demo-express-api

A hands-on Express REST API built for learning.  
It covers the full CRUD lifecycle, middleware, environment secrets, and clean project structure — all in one small project.

---

## What you will learn

| Concept | Where to look |
|---|---|
| Express router & routing | `src/routes/books.js` |
| In-memory array as a database | `src/db.js` |
| Custom middleware (API key auth) | `src/auth.js` |
| Reading secrets from `.env` | `src/index.js` + `src/auth.js` |
| gitignoring secrets | `.gitignore` |
| HTTP status codes (200/201/204/400/401/403/404) | All route handlers |

---

## Project structure

```
demo-express-api/
├── src/
│   ├── index.js          ← app entry point, mounts middleware & routes
│   ├── auth.js           ← API key middleware
│   ├── db.js             ← in-memory array "database" with CRUD helpers
│   └── routes/
│       └── books.js      ← all /books route handlers
├── .env                  ← your real secrets (gitignored, never committed)
├── .env.example          ← template to share with teammates
├── .gitignore
└── package.json
```

---

## Prerequisites

- **Node.js** ≥ 18 — [nodejs.org](https://nodejs.org)
- **npm** (bundled with Node)
- A REST client to test with — [curl](https://curl.se), [Postman](https://postman.com), or [Insomnia](https://insomnia.rest)

---

## Installation

```bash
# 1. Enter the project folder
cd demo-express-api

# 2. Install dependencies (express + dotenv + nodemon)
npm install

# 3. Set up your environment file
cp .env.example .env
# Then open .env and set your own API_KEY value
```

### What `npm install` downloads

| Package | Purpose |
|---|---|
| `express` | Web framework — routing, middleware, request/response |
| `dotenv` | Loads `.env` file into `process.env` at startup |
| `nodemon` (dev) | Restarts the server automatically when you save a file |

---

## Running the server

```bash
# Production-style (plain node)
npm start

# Development (auto-restart on file save)
npm run dev
```

The server starts at **http://localhost:3000** (or the `PORT` in your `.env`).

---

## Environment variables

| Variable | Default | Description |
|---|---|---|
| `PORT` | `3000` | Port the server listens on |
| `API_KEY` | *(required)* | Secret key clients must send in `X-API-Key` header |

**Why `.env`?**  
Hard-coding secrets in source code is dangerous — they end up in git history and are visible to anyone with repo access.  
`dotenv` reads a local `.env` file and injects the values into `process.env` at startup.  
The `.env` file is listed in `.gitignore`, so it is never committed.  
The `.env.example` file (committed) shows teammates which variables they need to set, without revealing the actual values.

---

## API reference

All `/books` endpoints require the header:

```
X-API-Key: <your API_KEY from .env>
```

### Endpoints

| Method | Path | Description |
|---|---|---|
| `GET` | `/` | Health check (public) |
| `GET` | `/books` | List all books |
| `GET` | `/books/:id` | Get one book by ID |
| `POST` | `/books` | Create a new book |
| `PUT` | `/books/:id` | Replace a book (all fields) |
| `PATCH` | `/books/:id` | Partially update a book |
| `DELETE` | `/books/:id` | Delete a book |

### Book shape

```json
{
  "id": 1,
  "title": "The Pragmatic Programmer",
  "author": "Hunt & Thomas",
  "year": 1999
}
```

---

## curl examples

Replace `my-super-secret-key-123` with the value in your `.env`.

```bash
# List all books
curl http://localhost:3000/books \
  -H "X-API-Key: my-super-secret-key-123"

# Get one book
curl http://localhost:3000/books/1 \
  -H "X-API-Key: my-super-secret-key-123"

# Create a book
curl -X POST http://localhost:3000/books \
  -H "Content-Type: application/json" \
  -H "X-API-Key: my-super-secret-key-123" \
  -d '{"title":"Eloquent JavaScript","author":"Marijn Haverbeke","year":2018}'

# Update a book (full replace)
curl -X PUT http://localhost:3000/books/1 \
  -H "Content-Type: application/json" \
  -H "X-API-Key: my-super-secret-key-123" \
  -d '{"title":"The Pragmatic Programmer","author":"Hunt & Thomas","year":2000}'

# Partially update a book (change only year)
curl -X PATCH http://localhost:3000/books/1 \
  -H "Content-Type: application/json" \
  -H "X-API-Key: my-super-secret-key-123" \
  -d '{"year":2000}'

# Delete a book
curl -X DELETE http://localhost:3000/books/1 \
  -H "X-API-Key: my-super-secret-key-123"

# Try without API key — see the 401 response
curl http://localhost:3000/books

# Try with wrong API key — see the 403 response
curl http://localhost:3000/books \
  -H "X-API-Key: wrong-key"
```

---

## HTTP status codes used

| Code | Meaning | When you see it |
|---|---|---|
| `200 OK` | Success | GET, PUT, PATCH |
| `201 Created` | New resource created | POST |
| `204 No Content` | Success, no body | DELETE |
| `400 Bad Request` | Missing required fields | POST/PUT without title or author |
| `401 Unauthorized` | No API key provided | Missing `X-API-Key` header |
| `403 Forbidden` | Wrong API key | Incorrect `X-API-Key` value |
| `404 Not Found` | Resource or route missing | Unknown ID or unknown path |

---

## Things to try and extend

- Add a `PATCH /books/:id` test where you send an unknown field — notice it gets merged in. Is that a good idea?
- Move the `API_KEY` check into a separate "admin" route group and leave read-only `GET` routes public.
- Add a `search` query param: `GET /books?author=Martin` — filter the array before returning.
- Replace the array with a JSON file (`fs.readFileSync`) so data survives server restarts.
- Add input validation (check that `year` is a number, `title` is not empty after trimming, etc.).
