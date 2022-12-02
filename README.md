# LAB - Class 03

## Project: Basic API Server

### Author: Kenny W. Lino

### Problem Domain  

This application serves as an example for how to create an SQL database and connect it to our back-end with Express. We also use Express.router() to organize our endpoints per database into separate modules and write tests to ensure the functionality of the application.

### Links and Resources

- [ci/cd](https://github.com/kennywlino/basic-api-server/actions/)
- [back-end server (production)](https://basic-api-server-uhbc.onrender.com/)
- [Main PR from dev](https://github.com/kennywlino/basic-api-server/pull/2)

### Setup

#### `.env` requirements (where applicable)

i.e.

- `PORT` - Port Number
- `DATABASE_URL` - location of Postgres DB (i.e. postgres://localhost:5432/api-app?sslmode=disable)

#### How to initialize/run your application

- nodemon

#### How to use your library (where applicable)

#### Features / Routes

- GET : `/` - default route to hit
- GET, POST, PUT, DELETE: `/plants` - route for plant data
- GET, POST, PUT, DELETE: `/animals` - route for animal data

**Handlers**

- 404.js -- handles 404 errors
- 500.js -- handles 500 errors

#### Tests

- How do you run tests?
  - npm test

- Any tests of note?

  - 404 on a bad route
  - 404 on a bad method
  - Create a record using POST
  - Read a list of records using GET
  - Read a record using GET
  - Update a record using PUT
  - Destroy a record using DELETE

#### UML

![Class-03 UML](./assets/class-03_UML.jpeg)