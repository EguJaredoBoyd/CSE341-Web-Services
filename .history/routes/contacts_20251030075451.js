const { ObjectId } = require('mongodb');
const mongodb = require('../db/connect');

const getAllContacts = async (req, res) => {
  try {
    const db = mongodb.getDb();
    const result = await db.collection('contacts').find().toArray();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getSingleContact = async (req, res) => {
  try {
    const db = mongodb.getDb();
    const contactId = new ObjectId(req.params.id);
    const result = await db.collection('contacts').findOne({ _id: contactId });

    if (!result) {
      return res.status(404).json({ message: 'Contact not found' });
    }
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllContacts,
  getSingleContact
};
