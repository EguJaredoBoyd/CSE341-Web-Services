const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const { MongoClient } = require('mongodb');

dotenv.config();
const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 8080;
const client = new MongoClient(process.env.MONGODB_URI);

// Connect to MongoDB once, then reuse
async function connectDB() {
  try {
    await client.connect();
    console.log("✅ Connected to MongoDB");
    return client.db('contactsDB');
  } catch (err) {
    console.error("❌ Error connecting to MongoDB:", err);
  }
}

let db;
connectDB().then(database => db = database);

// Import routes
const contactsRoutes = require('./routes/contacts');
app.use('/contacts', (req, res, next) => {
  req.db = db;
  next();
}, contactsRoutes);

app.get('/', (req, res) => {
  res.send('Contacts API is running...');
});

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
