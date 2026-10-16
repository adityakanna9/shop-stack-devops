const express = require("express");
const { Pool } = require("pg");

const app = express();
const port = Number(process.env.PORT || 5000);
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

app.use((_req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/api/health", async (_req, res) => {
  try {
    await pool.query("SELECT 1");
    res.json({ status: "connected to PostgreSQL" });
  } catch (error) {
    console.error("Database check failed:", error.message);
    res.status(503).json({ status: "database not ready" });
  }
});

app.get("/", (_req, res) => res.send("Shop API is running."));
app.listen(port, "0.0.0.0", () => console.log(`API listening on ${port}`));
