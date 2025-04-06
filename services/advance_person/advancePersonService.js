const Person = require('../../models/person/person');
const IPersonService = require('../interfacePersonService');

/*
 Disclaimer:
i want to use hashtable to replace 
    this.persons = [];
but javascript don't have native class for hashtable
so this advance_person feature is abandomed
*/

class AdvancePersonService extends IPersonService {
  constructor() {
    super();
    this.persons = [];
  }

  async getAllPersons() {
    return this.persons;
  }

  async getPersonById(id) {
    if (id + 1 > this.persons.length) {
      return undefined;
    }
    return this.persons[id];
  }

  async createPerson(data) {
    const newPerson = new Person(data.name, data.age);
    this.persons.push(newPerson);
    return newPerson;
  }

  async deletePersonById(id) {
    if (id + 1 > this.persons.length) {
      return false;
    }
    this.persons.splice(id, 1);
    return true;
  }

  async deletePersons() {
    this.persons = [];
  }
}

module.exports = AdvancePersonService;
