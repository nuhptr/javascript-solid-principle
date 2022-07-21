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

  OpenDoors() {
    throw new Error("Method not Implemented!");
  }
}

class MotorCycle extends VehicleInterface {
  drive() {
    // some code
  }

  refuel() {
    // some code
  }

  stop() {
    // some code
  }

  // pain point
  // can not be implemented
  OpenDoors() {
    // some code
  }
}
