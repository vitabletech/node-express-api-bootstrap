/* eslint-disable consistent-return */
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import db from '../models/index.js';
import config from '../../config/auth.config.js';
import { SUCCESS_REGISTRATION, SUCCESS_REGISTRATION_USER_ROLE, USER_NOT_FOUND, INVALID_PASSWORD, HASHED_PASSWORD } from '../utils/constant.js';

const { user: User, role: Role } = db;

export const signup = (req, res) => {
  // Save User to Database
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, HASHED_PASSWORD)
  })
    .then(user => {
      if (req.body.role) {
        Role.findOne({
          where: {
            name: req.body.role
          },
          attributes: ['id']
        }).then(roles => {
          user.setRoles(roles).then(() => {
            res.send({ message: SUCCESS_REGISTRATION });
          });
        });
      } else {
        // user role = 1
        user.setRoles([1]).then(() => {
          res.send({ message: SUCCESS_REGISTRATION_USER_ROLE });
        });
      }
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

export const signin = (req, res) => {
  User.findOne({
    where: {
      username: req.body.username
    }
  })
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: USER_NOT_FOUND });
      }
      const passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: INVALID_PASSWORD
        });
      }
      const token = jwt.sign({ id: user.id },config.secret,config.jwtOptions);

      user.getRoles().then(roles => {
        const authorities = roles.map(role => `ROLE_${role.name.toUpperCase()}`);
        res.status(200).send({
          id: user.id,
          username: user.username,
          email: user.email,
          roles: authorities,
          accessToken: token
        });
      });
    })
    .catch(err => res.status(500).send({ message: err.message }));
};

