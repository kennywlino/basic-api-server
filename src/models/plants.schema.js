'use strict';

module.exports = (sequelizeDB, DataTypes) => sequelizeDB.define('plants', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  plantGroup: {
    type: DataTypes.ENUM,
    values: ['flowers', 'conifers', 'ferns', 'mosses'],
    allowNull: false,
  },
});