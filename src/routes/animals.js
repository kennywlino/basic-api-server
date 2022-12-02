'use strict';

const express = require('express');
// this needs to be changed
const { animalModel } = require('../models');

const router = express.Router();

// GET all animals
router.get('/animal', async (req, res, next) => {
  try {
    const animals = await animalModel.findAll();
    res.status(200).send(animals);
  } catch(e) {
    next(e);
  }
});

// GET a single animal
router.get('/animal/:id', async (req, res, next) => {
  try {
    let id = req.params.id;
    const selectedAnimal = await animalModel.findByPk(id);
    res.status(200).send(selectedAnimal);
  } catch(e) {
    next(e);
  }
});

// DELETE a single animal
router.delete('/animal/:id', async (req, res, next) => {
  try {
    let id = req.params.id;
    const selectedAnimal = await animalModel.destroy({ where: {id} });
    res.status(200).send(null);
  } catch(e) {
    next(e);
  }
});

// POST a new animal
router.post('/animal', async (req, res, next) => {
  try {
    const newAnimal = await animalModel.create(req.body);
    res.status(200).send(newAnimal);
  } catch(e) {
    next(e);
  }
});

// PUT (update) a single animal
router.put('/animal/:id', async (req, res, next) => {
  try {
    let id = req.params.id;
    const selectedAnimal = await animalModel.update(req.body, { where: { id } });
    const updatedAnimal = await animalModel.findByPk(id);
    res.status(200).send(updatedAnimal);
  } catch(e) {
    next(e);
  }
});


module.exports = router;