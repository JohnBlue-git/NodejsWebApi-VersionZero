const Person = require('../../models/person/person');
const AbstractController = require('../abstractController');
const PersonSerializer = require('../../serializers/person/personSerializer');

class PersonController extends AbstractController {
  constructor(service) {
    super(); // Call the constructor of AbstractController
    this.personService = service; // Store the provided service class
  }

  async getAllPersons(req, res) {
    try {
      const persons = await this.personService.getAllPersons();
      const serializedPersons = this.personService.serializeMultiple(persons);
      res.status(200).json(serializedPersons);
    } catch (err) {
      this.handleError(res, 'Error fetching persons', 500);
    }
  }

  async createPerson(req, res) {
    try {
      const newPerson = PersonSerializer.deserialize(req.body);
      await this.personService.createPerson(newPerson);
      const serializedPerson = PersonSerializer.serialize(newPerson);
      res.status(201).json(serializedPerson);
    } catch (err) {
      this.handleError(res, 'Error creating person; ' + err, 500);
    }
  }
}

module.exports = PersonController;
