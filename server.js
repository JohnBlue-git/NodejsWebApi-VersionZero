const express = require('express');
const routes = require('./routes'); // Import the routes
const app = express();
const port = 1999;

// Middleware to parse incoming JSON requests
app.use(express.json()); // Express has built-in body-parser as of v4.16+

// Use the routes defined in index.js
app.use('/api', routes); // All routes will now be prefixed with '/api'

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
