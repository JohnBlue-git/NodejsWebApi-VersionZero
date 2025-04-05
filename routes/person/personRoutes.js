const express = require('express');
const router = express.Router();
const PersonController = require('../../controllers/person/personController');
const PersonService = require('../../services/person/personService');

// Create an instance of PersonController
const personService = new PersonService();
const personController = new PersonController(personService);

// Define the routes
router.get('/', (req, res) => personController.getAllPersons(req, res));
router.post('/', (req, res) => personController.createPerson(req, res));

module.exports = router;
