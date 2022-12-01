'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const notFound = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const PORT = process.env.PORT || 3002;
const animalRouter = require('./routes/animals');
const plantRouter = require('./routes/plants');

const app = express();
app.use(cors());
app.use(express.json());
app.use(animalRouter);
app.use(plantRouter);

app.get('/', (req, res, next) => {
  res.status(200).send('Hello World');
});

app.use('*', notFound);
app.use(errorHandler);

function start() {
  app.listen(PORT, () => console.log('listening on port', PORT));
}

module.exports = { app, start };
