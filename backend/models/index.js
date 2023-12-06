const Sequelize = require('sequelize');
const { development } = require('../sequelize.config');

const sequelize = new Sequelize(
  development.database,
  development.username,
  development.password,
  {
    host: development.host,
    dialect: development.dialect,
  }
);

const City = sequelize.define('City', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  state: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lat: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lon: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = { sequelize, City };
