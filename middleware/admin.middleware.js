const User = require('../models/user.model');

const adminMiddleware = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user || user.role !== 'Admin') {
      return res.status(403).send('Access denied.');
    }
    next();
  } catch (error) {
    res.status(500).send('Internal Server Error: ' + error.message);
  }
};

module.exports = adminMiddleware;
