const Person = require('../../models/person/person');
const IPersonService = require('../interfacePersonService');

class PersonService extends IPersonService {
  constructor() {
    super();
    this.persons = [];
  }

  async getAllPersons() {
    return this.persons;
  }

  async getPersonById(id) {
    if (id + 1 > this.persons.length()) {
      return undefined;
    }
    return this.persons.indexOf(id);
  }

  async createPerson(data) {
    const newPerson = new Person(data.name, data.age);
    this.persons.push(newPerson);
    return newPerson;
  }

  async updatePerson(id, data) {
    if (id + 1 > this.persons.length()) {
      return undefined;
    }
    const person = this.persons.indexOf(id);
    if (person) {
      person.name = data.name || person.name;
      person.age = data.age || person.age;
      return person;
    }
    return undefined;
  }

  async deletePerson(id) {
    if (id + 1 > this.persons.length()) {
      return false;
    }
    this.persons.splice(index, 1);
    return true;
  }

  async deletePersons() {
    this.persons = [];
  }
}

module.exports = PersonService;
