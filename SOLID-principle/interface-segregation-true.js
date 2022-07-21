class VehicleInterface {
  drive() {
    throw new Error("Method not implemented!");
  }

  stop() {
    throw new Error("Method not implemented!");
  }

  refuel() {
    throw new Error("Method not implemented!");
  }
}

const doorMixins = (BaseClass) =>
  class extends BaseClass {
    openDoors() {
      throw new Error("Method not implemented");
    }
  };

class MotorCycle extends VehicleInterface {
  drive() {
    // implementation
  }

  stop() {
    // implementation
  }

  refuel() {
    // implementation
  }
}

// TODO: dengan begini class Car bisa menggunakan interface door dan vehicle
class Car extends doorMixins(VehicleInterface) {
  openDoors() {
    // implementation
  }

  drive() {
    // implementation
  }

  stop() {
    // implementation
  }

  refuel() {
    // implementation
  }
}
