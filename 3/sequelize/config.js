require('dotenv').config();

module.exports = {
  development: {
    dialect: 'postgres',
    url: process.env.DB_URL,
  },
  production: {
    dialect: 'postgres',
    url: process.env.DB_URL,
  },
};
