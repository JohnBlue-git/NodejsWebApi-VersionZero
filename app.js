// app.js
const express = require('express');
const routes = require('./routes'); // Import the routes

const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());

// Use the routes defined in routes/index.js
app.use('/api', routes);

module.exports = app;
