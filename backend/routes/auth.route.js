const express = require('express');
const AuthRouter = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const AuthModel = require('../model/auth.model');
const checkemail = require('../middlewares/checkemail');
const userAuthentication = require('../middlewares/userAuthentication');
AuthRouter.post('/signup', checkemail, async (req, res) => {
  let { email, pass, name } = req.body;
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(pass, salt, function (err, hash) {
      const result = new AuthModel({ email, pass: hash, name });
      result.save((error, succes) => {
        if (error) {
          return res.send({ message: 'signup failed' });
        }

        return res.send({ message: 'signup Successfull' });
      });
    });
  });
});
AuthRouter.post('/login', async (req, res) => {
  const { email, pass } = req.body;
  let user = await AuthModel.findOne({ email });
  const hash_password = user.pass;
  bcrypt.compare(pass, hash_password, function (err, result) {
    if (result) {
      var token = jwt.sign(
        { email, userId: user._id, name: user.name },
        'ranjan'
      );
      return res.send({ message: 'login successfull', token: token });
    }
    return res.send({ message: 'user not found' });
  });
});
// AuthRouter.get('/get', userAuthentication, (req, res) => {
//   res.send('testing');
// });
module.exports = AuthRouter;
