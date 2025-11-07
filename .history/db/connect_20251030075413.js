const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');

dotenv.config();

let _db;

const connect = async () => {
  if (_db) {
    console.log('Database already initialized');
    return _db;
  }

  try {
    const client = await MongoClient.connect(process.env.MONGODB_URI);
    _db = client.db('contactsDB'); // name your database
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Database connection failed', err);
    throw err;
  }
};

const getDb = () => {
  if (!_db) {
    throw Error('Database not initialized');
  }
  return _db;
};

module.exports = { connect, getDb };
