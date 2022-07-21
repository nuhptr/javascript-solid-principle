class Car {
  constructor(engine) {
    this._engine = engine;
  }
}

class Engine {
  start() {
    // magic code
  }
}

class DieselEngine {
  start() {
    console.log("Diesel Engine");
  }
}

const car = new Car(new Engine());
// car.start();
const dieselEngine = new Car(new DieselEngine()); // error karena diesel engine bukan tipe dari Engine Car
dieselEngine.start(); // ga kedeteksi sebagai function car
