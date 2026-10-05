const express = require('express');
const router = express.Router();
const c = require('../controllers/contactController');

router.route('/').get(c.getContacts).post(c.createContact);
router.route('/:id').put(c.updateContact).delete(c.deleteContact);

module.exports = router;