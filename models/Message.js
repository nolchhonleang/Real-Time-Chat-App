// message schema 
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Message = sequelize.define('Message', {
  username: {
    type: DataTypes.STRING(50),
    allowNull: false,
    validate: {
      notEmpty: { msg: 'Username is required' },
      len: { args: [1, 50], msg: 'Username cannot be more than 50 characters' }
    }
  },
  content: {
    type: DataTypes.STRING(1000),
    allowNull: false,
    validate: {
      notEmpty: { msg: 'Message content is required' },
      len: { args: [1, 1000], msg: 'Message cannot be more than 1000 characters' }
    }
  }
}, {
  timestamps: true,
  createdAt: 'createdAt',
  updatedAt: false
});

module.exports = Message;