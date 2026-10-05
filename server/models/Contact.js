const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, 'Name is required'], trim: true },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, 'Invalid email'],
    },
    phone: {
      type: String,
      required: [true, 'Phone is required'],
      match: [/^\d{10}$/, 'Phone must be 10 digits'],
    },
    address: { type: String, trim: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Contact', contactSchema);