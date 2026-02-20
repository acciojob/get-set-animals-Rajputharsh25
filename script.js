class Animal {
  constructor(species) {
    this._species = species;
  }

  // Getter for species
  get species() {
    return this._species;
  }

  // Generic method for any animal sound
  makeSound() {
    console.log(`The ${this.species} makes a sound`);
  }
}

class Cat extends Animal {
  constructor(species) {
    // Pass the species up to the Animal constructor
    super(species);
  }

  purr() {
    console.log("purr");
  }
}

class Dog extends Animal {
  constructor(species) {
    // Pass the species up to the Animal constructor
    super(species);
  }

  bark() {
    console.log("woof");
  }
}

// Attach to window for Cypress tests to access
window.Animal = Animal;
window.Cat = Cat;
window.Dog = Dog;
