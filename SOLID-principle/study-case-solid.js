class Vehicle {
  accelerate() {
    throw new Error("Method not implemented");
  }

  brake() {
    throw new Error("Method not implemented");
  }

  refill(source) {
    throw new Error("Method not implemented");
  }
}

class Car extends Vehicle {
  constructor(engine, storage) {
    super();
    this._engine = engine;
    this._storage = storage;
  }

  accelerate() {
    this._engine.move();
  }

  refill(source) {
    this._storage.fill(source);
  }

  brake() {}
}

// Interface
class EngineInterface {
  move() {
    throw new Error("method not implemented!");
  }
}

class StorageInterface {
  fill(source) {
    throw new Error("method not implemented");
  }

  getSource() {
    throw new Error("Method not implemented");
  }
}

// Mobil Commercial Menggunakan Oli
// Petrol Engine
class PetrolEngine extends EngineInterface {
  constructor(oilPipe, piston) {
    super();
    this._oilPipe = oilPipe;
    this._piston = piston;
  }

  move() {
    const oil = this._oilPipe.suckOil();
    const energy = oil.burn();
    energy.push(this._piston);
  }
}

class Piston {
  move() {}
}

class OilPipe {
  suckOil() {
    return new Oil();
  }
}

class Oil {
  burn() {
    return new Energy();
  }
}

class Energy {
  push(piston) {
    piston.move();
  }
}

// Storage Tank
class Tank extends StorageInterface {
  constructor() {
    super();
    this._oil = null;
  }

  fill(source) {
    this._oil = source;
  }

  getSource() {
    return this._oil;
  }
}

// Petrol Car
const tank = new Tank();
const oilPipe = new OilPipe();
const piston = new Piston();
const petrolEngine = new PetrolEngine(oilPipe, piston);
const petrolCar = new Car(petrolEngine, tank);
const oil = new Oil();
petrolCar.refill(oil);
petrolCar.accelerate();
petrolCar.brake();

// Mobil ramah lingkungan menggunakan listrik
// ElectricEngine
class ElectricEngine extends EngineInterface {
  constructor(speedController) {
    super();
    this._speedController = speedController;
  }

  move() {
    this._speedController.control();
  }
}

class SpeedController {
  constructor(bms, motor) {
    this._bms = bms;
    this._motor = motor;
  }

  control() {
    const battery = this._bms.getBattery();
    this._motor.rotate(battery);
  }
}

class BatteryManagementSystem {
  getBattery() {
    return new Battery(new Electrons());
  }
}

class ElectricMotor {
  rotate(batter) {
    // rotate the rotor using electric power from motor
  }
}

class Electrons {}

class Battery extends StorageInterface {
  constructor(electrons) {
    super();
    this._electrons = electrons;
  }

  fill(source) {
    this._electrons = source;
  }

  getSource() {
    return this._electrons;
  }
}

// Electric Car
const electrons = new Electrons();
const battery = new Battery();
const speedController = new SpeedController(
  new BatteryManagementSystem(),
  new ElectricMotor()
);

const electricEngine = new ElectricEngine(speedController);
const electricCar = new Car(electricEngine, battery);

electricCar.refill(electrons);
electricCar.accelerate();
electricCar.brake();
