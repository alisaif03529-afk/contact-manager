const errorHandler = (err, req, res, next) => {
  if (err.name === 'ValidationError') {
    const messages = Object.values(err.errors).map((e) => e.message);
    return res.status(400).json({ message: messages.join(', ') });
  }
  if (err.code === 11000) {
    return res.status(400).json({ message: 'Email already exists' });
  }
  if (err.name === 'CastError') {
    return res.status(400).json({ message: 'Invalid contact ID' });
  }
  res.status(500).json({ message: err.message || 'Server error' });
};

module.exports = errorHandler;