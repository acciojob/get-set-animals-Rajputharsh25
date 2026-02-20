// Animal Class
class Animal {
    constructor(species) {
        this._species = species;
    }

    // Getter for species
    get species() {
        return this._species;
    }

    // Method to make sound
    makeSound() {
        console.log(`The ${this.species} makes a sound`);
    }
}


// Cat Class (inherits Animal)
class Cat extends Animal {
    constructor(species) {
        super(species);
    }

    // Method for purring
    purr() {
        console.log("purr");
    }
}


// Dog Class (inherits Animal)
class Dog extends Animal {
    constructor(species) {
        super(species);
    }

    // Method for barking
    bark() {
        console.log("woof");
    }
}


// Example usage

// Cat example
const myCat = new Cat("Siamese");
myCat.makeSound(); // The Siamese makes a sound
myCat.purr();      // purr

// Dog example
const myDog = new Dog("Golden Retriever");
myDog.makeSound(); // The Golden Retriever makes a sound
myDog.bark();      // woof
