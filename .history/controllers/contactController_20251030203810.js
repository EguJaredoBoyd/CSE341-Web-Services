// controllers/contacts.js
import { ObjectId } from "mongodb";
import { getDB } from "../db/connect.js";

// Get all contacts
export async function getAllContacts(req, res) {
  try {
    const db = getDB();
    const contacts = await db.collection("contacts").find().toArray();
    res.status(200).json(contacts);
  } catch (err) {
    res.status(500).json({ message: "Error fetching contacts", error: err });
  }
}

// Get one contact by ID
export async function getSingleContact(req, res) {
  try {
    const db = getDB();
    const contactId = new ObjectId(req.params.id);
    const contact = await db.collection("contacts").findOne({ _id: contactId });

    if (!contact) return res.status(404).json({ message: "Contact not found" });

    res.status(200).json(contact);
  } catch (err) {
    res.status(500).json({ message: "Error fetching contact", error: err });
  }
}
