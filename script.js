// Animal class
class Animal {
  constructor(species) {
    this._species = species;
  }

  // Getter for species
  get species() {
    return this._species;
  }

  // Method to log sound message
  makeSound() {
    console.log(`The ${this._species} makes a sound`);
  }
}

// Cat class inherits Animal
class Cat extends Animal {
  constructor(species) {
    super(species);
  }

  purr() {
    console.log("purr");
  }
}

// Dog class inherits Animal
class Dog extends Animal {
  constructor(species) {
    super(species);
  }

  bark() {
    console.log("woof");
  }
}


// Function to test in browser
function runTest() {
  // Create Cat
  const myCat = new Cat("Siamese");
  myCat.makeSound();
  myCat.purr();

  // Create Dog
  const myDog = new Dog("Golden Retriever");
  myDog.makeSound();
  myDog.bark();

  // Test getter
  console.log("Cat species:", myCat.species);
  console.log("Dog species:", myDog.species);
}
