const Contact = require('../models/Contact');

exports.getContacts = async (req, res, next) => {
  try {
    const q = req.query.search;
    const filter = q
      ? { $or: ['name', 'email', 'phone'].map((f) => ({ [f]: { $regex: q, $options: 'i' } })) }
      : {};
    res.json(await Contact.find(filter).sort({ createdAt: -1 }));
  } catch (err) { next(err); }
};

exports.createContact = async (req, res, next) => {
  try {
    res.status(201).json(await Contact.create(req.body));
  } catch (err) { next(err); }
};

exports.updateContact = async (req, res, next) => {
  try {
    const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!contact) return res.status(404).json({ message: 'Contact not found' });
    res.json(contact);
  } catch (err) { next(err); }
};

exports.deleteContact = async (req, res, next) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (!contact) return res.status(404).json({ message: 'Contact not found' });
    res.json({ message: 'Contact deleted' });
  } catch (err) { next(err); }
};