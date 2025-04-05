
class IPersonService {
    constructor() {
      if (this.constructor === IPersonService) {
        throw new Error("Cannot instantiate an interface (abstract class).");
      }
    }
  
    // Methods that must be implemented

    async getAllPersons() {
      throw new Error('getAllPersons() method must be implemented');
    }
  
    async createPerson(data) {
      throw new Error('createPerson() method must be implemented');
    }
  
    async getPersonById(id) {
      throw new Error('getPersonById() method must be implemented');
    }
  
    async deletePersonById(id) {
      throw new Error('deletePersonById() method must be implemented');
    }

    async deletePersons() {
      throw new Error('deletePersons() method must be implemented');
    }
  }
  
  module.exports = IPersonService;
  