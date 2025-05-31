"use strict";
class Animalz {
    constructor(name) {
        this.name = name;
    }
    move() {
        console.log(`${this.name} is moving`);
    }
}
class Dogz extends Animalz {
    makeSound() {
        console.log("whoof");
    }
}
const bingo = new Dogz("Bingo");
bingo.makeSound();
