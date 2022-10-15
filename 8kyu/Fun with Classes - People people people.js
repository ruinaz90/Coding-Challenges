class Person {
    // Get coding in ES6 :D
    constructor(firstName, lastName, age, gender) {
      this.firstName = firstName || "John"
      this.lastName = lastName || "Doe"
      this.age = age || 0
      this.gender = gender || "Male"
    }
    sayFullName() {
      return `${this.firstName} ${this.lastName}`
    }
    static greetExtraTerrestrials(raceName) {
      return `Welcome to Planet Earth ${raceName}`
    }
  }
  //https://www.codewars.com/kata/56f7f8215d7c12c0e7000b19/train/javascript