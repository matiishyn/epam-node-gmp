require('dotenv').config();

module.exports = {
  development: {
    dialect: 'postgres',
    url: process.env.DB_URL,
    // operatorsAliases: false,
  },
  production: {
    dialect: 'postgres',
    url: process.env.DB_URL,
    // operatorsAliases: false,
  },
};
