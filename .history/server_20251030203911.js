// server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectToDB } from "./db/connect.js";
import contactsRoutes from "./routes/contacts.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Base route
app.get("/", (req, res) => {
  res.send("Welcome to the Contacts API! ✅");
});

// Use the contacts route
app.use("/contacts", contactsRoutes);

// Connect to database and start server
const PORT = process.env.PORT || 3000;

connectToDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
});
