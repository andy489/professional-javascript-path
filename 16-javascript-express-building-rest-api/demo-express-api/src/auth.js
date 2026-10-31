// Middleware that checks for a valid API key in the X-API-Key request header.
// This demonstrates how secrets from .env are used at runtime without
// hard-coding them in source files.

function requireApiKey(req, res, next) {
  const key = req.headers["x-api-key"];

  if (!key) {
    return res.status(401).json({ error: "Missing X-API-Key header" });
  }

  // process.env.API_KEY is populated from .env via dotenv (see index.js)
  if (key !== process.env.API_KEY) {
    return res.status(403).json({ error: "Invalid API key" });
  }

  next(); // key is valid — hand off to the next handler
}

module.exports = { requireApiKey };
