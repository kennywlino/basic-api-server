'use strict';

const express = require('express');
// this needs to be changed
const { PlantModel } = require('../models');

const router = express.Router();

router.get('/plant', async (req, res, next) => {
  try {
    const plants = await PlantModel.findAll();
    res.status(200).send(plants);
  } catch(e) {
    next(e);
  }
});

router.post('/plant', async (req, res, next) => {
  try {
    const newPlant = await PlantModel.create(req.body);
    res.status(200).send(newPlant);
  } catch(e) {
    next(e);
  }
});

module.exports = router;