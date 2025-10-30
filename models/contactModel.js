import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  favoriteColor: { type: String },
  birthday: { type: String }
});

const Contact = mongoose.model("Contact", contactSchema);

export default Contact;
