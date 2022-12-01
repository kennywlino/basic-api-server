'use strict';

const { app } = require('../src/server.js');
const supertest = require('supertest');
const { sequelizeDB } = require('../src/models/index.js');
const request = supertest(app);

beforeAll(async () => {
  await sequelizeDB.sync();
});

afterAll(async () => {
  await sequelizeDB.drop();
});

describe('REST API', () => {
  test('404 error code on a bad route', async () => {
    const response = await request.get('/foo');
    expect(response.status).toEqual(404);
  });

  test('404 error code on a bad method', async () => {
    const response = await request.delete('/plant');
    expect(response.status).toEqual(404);
  });
});

describe('/animal route', () => {
  test('can POST a new record', async () => {
    const response = await request.post('/animal').send({
      name: 'cat',
      age: 5,
      animalClass: 'mammal',
    });
    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('cat');
    expect(response.body.age).toEqual(5);
    expect(response.body.animalClass).toEqual('mammal');
  });

  test('can GET all records', async() => {
    const response = await request.get('/animal');
    expect(response.status).toEqual(200);
    expect(response.body[0].name).toEqual('cat');
    expect(response.body[0].age).toEqual(5);
    expect(response.body[0].animalClass).toEqual('mammal');
  });

  test('can GET a single record', async() => {
    const response = await request.get('/animal/1');
    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('cat');
    expect(response.body.age).toEqual(5);
    expect(response.body.animalClass).toEqual('mammal');
  });

  test('can UPDATE a single record', async() => {
    const response = await request.put('/animal/1').send({
      animalClass: 'fish',
    });
    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('cat');
    expect(response.body.age).toEqual(5);
    expect(response.body.animalClass).toEqual('fish');
  });

  test('can DELETE a single record', async() => {
    const response = await request.delete('/animal/1');
    expect(response.status).toEqual(200);
    // const getResponse = await request.get('/plant/1'); 
    // expect(getResponse.status).toEqual(404);
  });
});

describe('/plant route', () => {
  test('can POST a new record', async () => {
    const response = await request.post('/plant').send({
      name: 'monstera',
      age: 20,
      plantGroup: 'flowers',
    });
    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('monstera');
    expect(response.body.age).toEqual(20);
    expect(response.body.plantGroup).toEqual('flowers');
  });

  test('can GET all records', async() => {
    const response = await request.get('/plant');
    expect(response.status).toEqual(200);
    expect(response.body[0].name).toEqual('monstera');
    expect(response.body[0].age).toEqual(20);
    expect(response.body[0].plantGroup).toEqual('flowers');
  });

  test('can GET a single record', async() => {
    const response = await request.get('/plant/1');
    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('monstera');
    expect(response.body.age).toEqual(20);
    expect(response.body.plantGroup).toEqual('flowers');
  });

  test('can UPDATE a single record', async() => {
    const response = await request.put('/plant/1').send({
      plantGroup: 'conifers',
    });
    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('monstera');
    expect(response.body.age).toEqual(20);
    expect(response.body.plantGroup).toEqual('conifers');
  });

  test('can DELETE a single record', async() => {
    const deleteResponse = await request.delete('/plant/1');
    expect(deleteResponse.status).toEqual(200);
    // const getResponse = await request.get('/plant/1'); 
    // expect(getResponse.status).toEqual(404);
  });
});