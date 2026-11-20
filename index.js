const http = require("http");
const { Pool } = require("pg");

const pool = new Pool({
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT || 5432),
  user: process.env.DB_USER || "nodeuser",
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME || "nodedb",
});

async function checkDatabaseConnection() {
  try {
    const result = await pool.query("SELECT NOW()");
    console.log("PostgreSQL connected successfully!");
    console.log("Database time:", result.rows[0].now);
  } catch (error) {
    console.error("PostgreSQL connection failed:", error.message);
  }
}

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html; charset=utf-8",
  });

  res.end("<h1>Hello CI/CD from AWS EC2!</h1>");
});

server.listen(3000, "0.0.0.0", () => {
  console.log("Server running on port 3000");

  if (process.env.DB_HOST) {
    checkDatabaseConnection();
  }
});
