const mongoose = require('mongoose');
const TodoSchema = new mongoose.Schema({
  todo: {
    type: String,
    required: 'Please provide a todo item'
  }
});

module.exports = mongoose.model('todo', TodoSchema);