const express = require('express');
const app = express();
const recipes = require('./routes/recipes');

app.use(express.json());
app.use(recipes);

module.exports = app;
