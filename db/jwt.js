const dotenv = require('dotenv');

dotenv.config();

const jwtConfig = {
  secret: process.env.JWT_SECRET,
  expiresIn: '9h', // Token expiration time
};

module.exports = jwtConfig;
