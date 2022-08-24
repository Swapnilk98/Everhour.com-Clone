const AuthModel = require('../model/auth.model');

const checkemail = async (req, res, next) => {
  const { email } = req.body;
  let IsEmail_exist = await AuthModel.findOne({ email });

  if (IsEmail_exist.email == email) {
    return res.send({ message: 'email already exhists' });
  }
  next();
};
module.exports = checkemail;
