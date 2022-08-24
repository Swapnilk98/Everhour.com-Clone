const jwt = require('jsonwebtoken');
const userAuthentication = (req, res, next) => {
  let token = req.headers.token.split(' ')[1];
  jwt.verify(token, 'ranjan', function (err, decoded) {
    if (err) {
      return res.send('login again');
    }
    console.log(decoded);

    next();
  });
};
module.exports = userAuthentication;
