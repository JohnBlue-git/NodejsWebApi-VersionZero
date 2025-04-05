const express = require('express');
const router = express.Router();
const PersonController = require('../../controllers/person/personController');
const AdvancePersonService = require('../../services/advance_person/advancePersonService');

// Create an instance of AbstractPersonController
const advancePersonService = new AdvancePersonService();
const advancePersonController = new PersonController(advancePersonService);

// Define the routes
router.get('/', (req, res) => advancePersonController.getAllPersons(req, res));
router.post('/', (req, res) => advancePersonController.createPerson(req, res));

module.exports = router;
