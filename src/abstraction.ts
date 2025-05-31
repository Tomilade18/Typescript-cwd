abstract class Animalz {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  abstract makeSound(): void;

  move() {
    console.log(`${this.name} is moving`);
  }
}

class Dogz extends Animalz {
  makeSound(): void {
    console.log("whoof");
  }
}

const bingo = new Dogz("Bingo");
bingo.makeSound();

// console.log(bingo)