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

  async getPersonById(req, res, id) {
    try {
      const person = await this.personService.getPersonById(id);
      const serializedPerson = this.personService.serialize(person);
      res.status(200).json(serializedPerson);
    } catch (err) {
      this.handleError(res, 'Error get person', 500);
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

  async patchPersonById(req, res, id) {
    try {
      const person = await this.personService.getPersonById(id);
      if (!person) {
        this.handleError(res, 'Error person with id not found; ', 404);
        return;
      }
      if (req.body.name) {
        person.setName(req.body.name);
      }
      if (req.body.age) {
        person.setAge(req.body.age);
      }
      const serializedPerson = PersonSerializer.serialize(person);
      res.status(200).json(serializedPerson);
    } catch (err) {
      this.handleError(res, 'Error patch person; ' + err, 500);
    }
  }

  async deletePerson(req, res, id) {
    try {
      await this.personService.deletePerson(id);
      res.status(204)
    } catch (err) {
      this.handleError(res, 'Error deleting person; ' + err, 500);
    }
  }

  async deletePersons(req, res) {
    try {
      await this.personService.deletePersons();
      res.status(204)
    } catch (err) {
      this.handleError(res, 'Error deleting persons; ' + err, 500);
    }
  }
}

module.exports = PersonController;
