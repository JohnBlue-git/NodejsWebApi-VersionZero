const Person = require('../../models/person/person');
const IPersonService = require('../interfacePersonService');

class AdvancePersonService extends IPersonService {
  constructor() {
    super();
    this.num_instances = 0;
    this.persons = new Map();
  }

  async getAllPersons() {
    return Array.from(this.persons.values());
  }

  async getPersonById(id) {
    if (!this.persons.has(id)) {
      return undefined;
    }
    return this.persons.get(id);
  }

  async createPerson(data) {
    const newPerson = new Person(data.name, data.age);
    this.persons.set(String(this.num_instances++), newPerson);
    return newPerson;
  }

  async deletePersonById(id) {
    if (!this.persons.has(id)) {
      return false;
    }
    this.persons.delete(id);
    return true;
  }

  async deletePersons() {
    this.persons.clear();
  }
}

module.exports = AdvancePersonService;
