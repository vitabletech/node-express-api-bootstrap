/* eslint-disable consistent-return */
/* eslint-disable no-restricted-syntax */
import jwt from 'jsonwebtoken';
import config from '../../config/auth.config.js';
import db from '../models/index.js';

const { user: User } = db;

const verifyToken = (req, res, next) => {
  const token = req.headers['x-access-token'];
  if (!token) {
    return res.status(403).send({
      message: 'No token provided!'
    });
  }

  jwt.verify(token,
    config.secret,
    (err, decoded) => {
      if (err) {
        return res.status(401).send({
          message: 'Unauthorized!'
        });
      }
      req.userId = decoded.id;
      next();
    });
};

const isAdmin = (req, res, next) => {
  User.findByPk(req.userId).then(user => {
    user.getRoles().then(roles => {
      for (const element of roles) {
        if (element.name === 'admin') {
          next();
          return;
        }
      }
      res.status(403).send({
        message: 'Require Admin Role!'
      });
      
    });
  });
};

const authJwt = {
  verifyToken,
  isAdmin
};

export default authJwt;
