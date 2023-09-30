const sqlite3 = require("sqlite3").verbose();
const dbPath = "./database.db";

const db = new sqlite3.Database(dbPath);

db.close();
