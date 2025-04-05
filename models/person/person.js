
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    static create(data) {
      return new Person(data.name, data.age);
    }
  }
  
  module.exports = Person;
  