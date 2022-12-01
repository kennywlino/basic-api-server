'use strict';

module.exports = (sequelizeDB, DataTypes) => sequelizeDB.define('animals', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  animalClass: {
    type: DataTypes.ENUM,
    values: ['mammal', 'reptiles', 'amphibians', 'fish', 'birds', 'invertebretes'],
    allowNull: false,
  },
});