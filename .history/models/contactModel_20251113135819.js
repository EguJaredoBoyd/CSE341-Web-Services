import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'First name is required'],
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    match: [/.+\@.+\..+/, 'Please enter a valid email address'],
  },
  favoriteColor: {
    type: String,
    default: 'Unknown'
  },
  birthday: {
    type: Date,
    required: [true, 'Birthday is required']
  }
});

const Contact = mongoose.model("Contact", contactSchema);

export default Contact;
