class Engine {
  start() {
    console.log("Engine Started");
  }
}


class Carz {
    engine: Engine;

    constructor(engine: Engine) {
        this.engine = engine;
    }

    startCar() {
        console.log('Car Started ');
        this.engine.start();
    }
}

const engine = new Engine();
const car = new Carz(engine)
car.startCar()