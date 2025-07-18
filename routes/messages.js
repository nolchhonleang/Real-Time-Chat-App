// message routes 
const express = require('express');
const { check, validationResult } = require('express-validator');
const Message = require('../models/Message');

const router = express.Router();

// Get all messages
router.get('/', async (req, res) => {
  try {
    const messages = await Message.findAll({
      order: [['createdAt', 'DESC']],
      limit: 50
    });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Post a message
router.post(
  '/',
  [
    check('username', 'Username is required').not().isEmpty(),
    check('content', 'Message content is required').not().isEmpty(),
    check('content', 'Message cannot exceed 1000 characters').isLength({ max: 1000 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const message = await Message.create({
        username: req.body.username,
        content: req.body.content
      });
      res.status(201).json(message);
    } catch (err) {
      res.status(500).json({ message: 'Server error' });
    }
  }
);

module.exports = router;