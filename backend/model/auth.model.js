const mongoose = require('mongoose');

const AuthSchema = new mongoose.Schema({
  email: String,
  pass: String,
  name: String,
  client: String,
  compony_name: String,
  development_field: String,
  job: String,
  phone: Number,
  projec_name: String,
  size: String,
  task_name: String,
  task_type: String,
  terms: String,
  typeOfproject: String,
  contributer_email: String,
});

const AuthModel = mongoose.model('signup', AuthSchema);
module.exports = AuthModel;
