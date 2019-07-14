'use strict';

const express = require('express');

const app = express();

const notFound = require('../middleware/404.js');

const errorHandler = require('../middleware/500.js');

const PORT = process.env.PORT || 8080;

let db = [];

// When does this middleware run?
// What does it do?
app.use(express.json());

// When does this middleware run?
app.use((req, res, next) => {
  console.log('LOG:', req.method, req.path);
  next();
});

app.use(notFound);
app.use(errorHandler);

// Route to Get All Categories
app.get('/categories', (req, res, next) => {
  let count = db.length;
  let results = db;
  res.json({ count, results });
});

// Route to Get One Category

// Route to Create a Category

// Route to Delete a Category

// Route to Update a Category

module.exports = {
  server: app,
  start: port => {
    let PORT = port || process.env.PORT || 8080;
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  },
};

