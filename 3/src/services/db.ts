import { Sequelize } from 'sequelize-typescript';
import CONFIG from '../config';
import User from '../models/user';

const db = new Sequelize(CONFIG.DB_URL, {
  dialectOptions: {
    charset: 'utf8',
    multipleStatements: true,
  },
  // logging: false,
  // models
  models: [User],
});

export default db;
