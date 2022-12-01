'use strict';

const express = require('express');
// this needs to be changed
const { AnimalModel } = require('../models');

const router = express.Router();

// GET all animals
router.get('/animal', async (req, res, next) => {
  try {
    const animals = await AnimalModel.findAll();
    res.status(200).send(animals);
  } catch(e) {
    next(e);
  }
});

// GET a single animal
router.get('/animal/:id', async (req, res, next) => {
  try {
    let id = req.params.id;
    const selectedAnimal = await AnimalModel.findByPk(id);
    res.status(200).send(selectedAnimal);
  } catch(e) {
    next(e);
  }
});

// DELETE a single animal
router.delete('/animal/:id', async (req, res, next) => {
  try {
    let id = req.params.id;
    const selectedAnimal = await AnimalModel.destroy({
      where: {
        id,
      },
    });
    res.status(200).send('Animal was deleted.');
  } catch(e) {
    next(e);
  }
});

// POST a new animal
router.post('/animal', async (req, res, next) => {
  try {
    const newAnimal = await AnimalModel.create(req.body);
    res.status(200).send(newAnimal);
  } catch(e) {
    next(e);
  }
});

// PUT (update) a single animal


module.exports = router;