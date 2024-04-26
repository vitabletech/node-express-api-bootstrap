import Sequelize from 'sequelize';
import DB_CONFIG from '../../config/db.config.js';
import createUserModel from './User.js';
import createRoleModel from './Role.js';
import createGuestModel from './Guest.js';
import createEventModel from './Event.js';

const sequelize = new Sequelize({...DB_CONFIG});

const db = {
  Sequelize,
  sequelize,
  user: createUserModel(sequelize, Sequelize),
  role: createRoleModel(sequelize, Sequelize),
  guests: createGuestModel(sequelize, Sequelize),
  events: createEventModel(sequelize, Sequelize),
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
