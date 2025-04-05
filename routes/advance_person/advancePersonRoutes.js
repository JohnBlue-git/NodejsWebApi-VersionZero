const express = require('express');
const router = express.Router();
const PersonController = require('../../controllers/person/personController');
const AdvancePersonService = require('../../services/advance_person/advancePersonService');

// Create an instance of AbstractPersonController
const advancePersonService = new AdvancePersonService();
const advancePersonController = new PersonController(advancePersonService);

// Define the routes
// GET collection
router.get('/', (req, res) => advancePersonController.getAllPersons(req, res));
// GET by id
router.get('/:id', (req, res) => {
    const { id } = req.params;
    advancePersonController.getPersonById(req, res, id);
  });
// POST
router.post('/', (req, res) => advancePersonController.createPerson(req, res));
// PATCH by id
router.patch('/:id', (req, res) => {
    const { id } = req.params;
    advancePersonController.patchPersonById(req, res, id);
  });
// DELETE by id
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    advancePersonController.deletePersonById(req, res, id);
  });
// DELETE collection
router.delete('/', (req, res) => advancePersonController.deletePersons(req, res));

module.exports = router;
