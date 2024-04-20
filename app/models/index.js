import Sequelize from 'sequelize';
import config from '../config/db.config.js';
import createUserModel from './User.js';
import createRoleModel from './Role.js';
import createGuestModel from './Guest.js';

const { DB, USER, PASSWORD, HOST, DIALECT, pool } = config;

const sequelize = new Sequelize(DB, USER, PASSWORD, {
  host: HOST,
  dialect: DIALECT,
  pool
});

const db = {
  Sequelize,
  sequelize,
  user: createUserModel(sequelize, Sequelize),
  role: createRoleModel(sequelize, Sequelize),
  guests: createGuestModel(sequelize, Sequelize),
  ROLES: ['user', 'admin']
};

db.role.belongsToMany(db.user, {
  through: 'user_roles'
});
db.user.belongsToMany(db.role, {
  through: 'user_roles'
});

db.ROLES = ['user', 'admin'];

export default db;
