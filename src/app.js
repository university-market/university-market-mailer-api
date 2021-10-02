const express = require('express');
const app = express();

// Set the request body using json data type
app.use(express.json());

// Set the view engine that's using
app.set('view engine', 'ejs');

module.exports = app;