const express = require('express');
const router = express.Router();

// Import the person-specific routes
const personRoutes = require('./person/personRoutes');
// Use the person routes for any '/api/person' requests
router.use('/person', personRoutes);

// Import the person-specific routes
const advancePersonRoutes = require('./advance_person/advancePersonRoutes');
// Use the person routes for any '/api/person' requests
router.use('/advance_person', advancePersonRoutes);

// You can add other routes here for different parts of the API
// For example, you can add a basic home route
router.get('/', (req, res) => {
  res.send('Welcome to the Web API!');
});

// Export the main router
module.exports = router;
