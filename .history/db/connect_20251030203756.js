// db/connect.js
import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const client = new MongoClient(process.env.MONGODB_URI);

let db;

export async function connectToDB() {
  try {
    await client.connect();
    db = client.db(); // uses the default database in the connection string
    console.log("✅ Connected to MongoDB Atlas");
  } catch (err) {
    console.error("❌ Database connection failed:", err);
  }
}

export function getDB() {
  if (!db) throw new Error("Database not connected!");
  return db;
}
