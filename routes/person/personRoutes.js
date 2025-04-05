const express = require('express');
const router = express.Router();
const PersonController = require('../../controllers/person/personController');
const PersonService = require('../../services/person/personService');

// Create an instance of PersonController
const personService = new PersonService();
const personController = new PersonController(personService);

// Define the routes
// GET collection
router.get('/', (req, res) => personController.getAllPersons(req, res));
// GET by id
router.get('/:id', (req, res) => {
    const { id } = req.params;
    personController.getPersonById(req, res, id);
  });
// POST
router.post('/', (req, res) => personController.createPerson(req, res));
// PATCH by id
router.patch('/:id', (req, res) => {
    const { id } = req.params;
    personController.patchPersonById(req, res, id);
  });
// DELETE by id
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    personController.deletePersonById(req, res, id);
  });
// DELETE collection
router.delete('/', (req, res) => personController.deletePersons(req, res));

module.exports = router;
