
class AbstractController {
  // Placeholder for common logic to be inherited by other controllers
  constructor() {
    if (new.target === AbstractController) {
      throw new TypeError('Cannot construct AbstractController instances directly');
    }
  }

  // Optional: Common methods that could be shared across all controllers
  handleError(res, message, statusCode = 500) {
    res.status(statusCode).json({ message });
  }

  // You can add other shared methods here if needed, like validation, logging, etc.
}

module.exports = AbstractController;
