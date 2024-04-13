import db from '../models/index.js';

const { user: User, ROLES } = db;

const checkDuplicateUsernameOrEmail = async (req, res, next) => {
  try {
    // Check if username exists
    const usernameUser = await User.findOne({
      where: {
        username: req.body.username
      }
    });
    if (usernameUser) {
      return res.status(400).send({
        message: 'Failed! Username is already in use!'
      });
    }

    // Check if email exists
    const emailUser = await User.findOne({
      where: {
        email: req.body.email
      }
    });
    if (emailUser) {
      return res.status(400).send({
        message: 'Failed! Email is already in use!'
      });
    }

    return next();
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

const checkRolesExisted = (req, res, next) => {
  if (req.body.role && !ROLES.includes(req.body.role)) {
    return res.status(400).send({
      message: `Failed! Role does not exist = ${ req.body.role}`
    });
  }
  
  return next();
};

export default {
  checkDuplicateUsernameOrEmail,
  checkRolesExisted
};
