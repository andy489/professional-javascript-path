// Load .env values into process.env BEFORE anything else reads them
require("dotenv").config();

const express = require("express");
const { requireApiKey } = require("./auth");
const booksRouter = require("./routes/books");

const app = express();
const PORT = process.env.PORT || 3000;

// --- Global middleware ---
app.use(express.json()); // parse JSON request bodies

// --- Public routes (no API key needed) ---
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the Books API",
    docs: "See README.md for all available endpoints",
  });
});

// --- Protected routes (API key required) ---
// requireApiKey runs before every /books handler
app.use("/books", requireApiKey, booksRouter);

// --- 404 catch-all ---
app.use((req, res) => {
  res.status(404).json({ error: `Route ${req.method} ${req.path} not found` });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`API key authentication is active`);
});
