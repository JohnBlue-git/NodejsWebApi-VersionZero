const Person = require('../../models/person/person');

class PersonSerializer {
  static serialize(person) {
    // Example of simple serialization
    return {
      name: person.name,
      age: person.age,
    };
  }

  static serializeMultiple(persons) {
    return persons.map(this.serialize);
  }

  // Deserialize a JSON object into a Person instance
  static deserialize(json) {
    // Assuming the JSON has 'name' and 'age' properties
    if (!json.name || !json.age) {
      throw new Error('Invalid JSON format for Person');
    }

    // Create a new Person object (you could also use a Person class here)
    return new Person(json.name, json.age);
  }

  // Deserialize multiple JSON objects into Person instances
  static deserializeMultiple(jsonArray) {
    return jsonArray.map(this.deserialize);
  }
}

module.exports = PersonSerializer;
