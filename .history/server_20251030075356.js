const express = require('express');
const dotenv = require('dotenv');
const mongodb = require('./db/connect');

dotenv.config();
const app = express();

app.use(express.json());

// connect to MongoDB
mongodb.connect();

// routes
app.use('/contacts', require('./routes/contacts'));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
