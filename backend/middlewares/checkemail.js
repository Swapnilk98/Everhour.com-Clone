const AuthModel = require('../model/auth.model');

const checkemail = async (req, res, next) => {
  const { email } = req.body;
   console.log(email);
  // let IsEmail_exist = await AuthModel.findOne({ email });
  // if (IsEmail_exist.email !== email) {
  
  // }
  next();
  // return res.send({ message: 'email already exhists' });

};
module.exports = checkemail;
