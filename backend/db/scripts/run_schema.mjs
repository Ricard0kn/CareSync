import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import pool from "../db_connection.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const schemaPath = path.join(__dirname, "../scripts/schema.sql");

async function run() {
  // Acquire a single client from the pool for transactional safety
  const client = await pool.connect();

  try {
    const sql = fs.readFileSync(schemaPath, "utf8");

    // Start the transaction
    await client.query("BEGIN");
    
    // Execute the schema
    await client.query(sql);
    
    // Commit all changes if no errors occurred
    await client.query("COMMIT");
    
    console.log("Schema executed successfully");
    process.exit(0);
  } catch (err) {
    // Undo any partial changes if something fails
    await client.query("ROLLBACK");
    console.error("Schema failed:", err);
    process.exit(1);
  } finally {
    // Always return the client back to the pool
    client.release();
    // Safely shut down all pool connections so the app exits cleanly
    await pool.end();
  }
}

run();

