
class AbstractController {
  constructor() {
    if (new.target === AbstractController) {
      throw new TypeError('Cannot construct AbstractController instances directly');
    }
  }

  // Optional: Common methods that could be shared across all controllers
  handleError(res, message, statusCode = 500) {
    res.status(statusCode).json({ message });
  }

  async getAllPersons(req, res) {
    throw new Error('method must be implemented');
  }

  async getPersonById(req, res, id) {
    throw new Error('method must be implemented');
  }

  async createPerson(req, res) {
    throw new Error('method must be implemented');
  }

  async patchPersonById(req, res, id) {
    throw new Error('method must be implemented');
  }

  async deletePersonById(req, res, id) {
    throw new Error('method must be implemented');
  }

  async deletePersons(req, res) {
    throw new Error('method must be implemented');
  }
}

module.exports = AbstractController;
