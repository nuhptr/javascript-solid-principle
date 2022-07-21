// High Level Module -> Interface
class EngineInterface {
  start() {
    throw new Error("Method not implemented!");
  }
}

// class Car
class Car {
  constructor(engine) {
    if (!(engine instanceof EngineInterface)) {
      throw new Error("Engine is not EngineInterface");
    }

    this._engine = engine;
  }

  start() {
    this._engine.start();
  }
}

// Low level modules
class PetrolEngine extends EngineInterface {
  start() {
    console.log("Petrol engine start");
  }
}

class HybridEngine extends EngineInterface {
  start() {
    console.log("Hybrid engine is on");
  }
}

class DieselEngine extends EngineInterface {
  start() {
    console.log("Diesel engine start");
  }
}

const main = () => {
  const petrolEngine = new PetrolEngine();
  const petrolCar = new Car(petrolEngine);

  const dieselEngine = new DieselEngine();
  const dieselCar = new Car(dieselEngine);

  const hybridEngine = new HybridEngine();
  const hybridCar = new Car(hybridEngine);

  // Booom boom
  petrolCar.start();
  dieselCar.start();
  hybridCar.start();
};
