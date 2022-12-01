'use strict';

const express = require('express');
// this needs to be changed
const { PlantModel } = require('../models');

const router = express.Router();

// GET all plants
router.get('/plant', async (req, res, next) => {
  try {
    const plants = await PlantModel.findAll();
    res.status(200).send(plants);
  } catch(e) {
    next(e);
  }
});

// GET a single plant
router.get('/plant/:id', async (req, res, next) => {
  try {
    let id = req.params.id;
    const selectedPlant = await PlantModel.findByPk(id);
    res.status(200).send(selectedPlant);
  } catch(e) {
    next(e);
  }
});

// DELETE a single plant
router.delete('/plant/:id', async (req, res, next) => {
  try {
    let id = req.params.id;
    const selectedPlant = await PlantModel.destroy({
      where: {
        id,
      },
      returning: true,
    });
    res.status(200).send(null);
  } catch(e) {
    next(e);
  }
});

// POST a new plant
router.post('/plant', async (req, res, next) => {
  try {
    const newPlant = await PlantModel.create(req.body);
    res.status(200).send(newPlant);
  } catch(e) {
    next(e);
  }
});

// PUT (update) a single plant
router.put('/plant/:id', async (req, res, next) => {
  try {
    let id = req.params.id;
    const selectedPlant = await PlantModel.update(req.body, {
      where: {
        id,
      },
      returning: true,
    });
    res.status(200).send(selectedPlant[1][0]);
  } catch(e) {
    next(e);
  }
});

module.exports = router;