const express = require("express");
const db = require("../db");

const router = express.Router();

// GET /books — list all books
router.get("/", (req, res) => {
  res.json(db.getAll());
});

// GET /books/:id — get one book by ID
router.get("/:id", (req, res) => {
  const book = db.getById(Number(req.params.id));
  if (!book) return res.status(404).json({ error: "Book not found" });
  res.json(book);
});

// POST /books — create a new book
router.post("/", (req, res) => {
  const { title, author, year } = req.body;

  if (!title || !author) {
    return res.status(400).json({ error: "title and author are required" });
  }

  const book = db.create({ title, author, year: year ?? null });
  res.status(201).json(book);
});

// PUT /books/:id — replace a book's data
router.put("/:id", (req, res) => {
  const { title, author, year } = req.body;

  if (!title || !author) {
    return res.status(400).json({ error: "title and author are required" });
  }

  const updated = db.update(Number(req.params.id), { title, author, year: year ?? null });
  if (!updated) return res.status(404).json({ error: "Book not found" });
  res.json(updated);
});

// PATCH /books/:id — partially update a book
router.patch("/:id", (req, res) => {
  const updated = db.update(Number(req.params.id), req.body);
  if (!updated) return res.status(404).json({ error: "Book not found" });
  res.json(updated);
});

// DELETE /books/:id — remove a book
router.delete("/:id", (req, res) => {
  const deleted = db.remove(Number(req.params.id));
  if (!deleted) return res.status(404).json({ error: "Book not found" });
  res.status(204).send(); // 204 No Content — success, nothing to return
});

module.exports = router;
