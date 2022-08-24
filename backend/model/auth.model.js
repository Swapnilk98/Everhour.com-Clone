const mongoose = require('mongoose');

const AuthSchema = new mongoose.Schema({
  email: String,
  pass: String,
  name: String,
});

const AuthModel = mongoose.model('signup', AuthSchema);
module.exports = AuthModel;
