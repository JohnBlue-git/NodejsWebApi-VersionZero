
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    static create(data) {
      return new Person(data.name, data.age);
    }

    setName(name) {
      this.name = name;
    }

    setAge(age) {
      this.age = age;
    }
  }
  
  module.exports = Person;
  