"use strict";
class Engine {
    start() {
        console.log("Engine Started");
    }
}
class Carz {
    constructor(engine) {
        this.engine = engine;
    }
    startCar() {
        console.log('Car Started ');
        this.engine.start();
    }
}
const engine = new Engine();
const car = new Carz(engine);
car.startCar();
