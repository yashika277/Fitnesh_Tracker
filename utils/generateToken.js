const jwt = require('jsonwebtoken');
const jwtConfig = require('../db/jwt');

const generateToken = (id, role) => {
  return jwt.sign({ id, role }, jwtConfig.secret, { expiresIn: jwtConfig.expiresIn });
};

module.exports = { generateToken };
