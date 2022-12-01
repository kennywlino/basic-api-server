'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const animalsSchema = require('./animals.schema');
const plantsSchema = require('./plants.schema');

// 'postgres://localhost:5432/api-app
// 'postgres://username:password@localhost:5432/api-app' <--- if using username/password
// using a ternary to set up sqlite for testing

const DATABASE_URL = process.env.NODE_ENV === 'test'
  ?  'sqlite::memory'
  : process.env.DATABASE_URL;


// instantiate the sequelize connection to our database

const sequelizeDB = new Sequelize(DATABASE_URL, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

// create an animal model with the schema

const AnimalModel = animalsSchema(sequelizeDB, DataTypes);

// creates a plant model with the schema

const PlantModel = plantsSchema(sequelizeDB, DataTypes);

module.exports = {
  sequelizeDB,
  AnimalModel,
  PlantModel,
};
