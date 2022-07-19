// Inheritance 1 Tingkat

class Animal {
  walk() {
    console.log(`${this.constructor.name} walk!`);
  }
}

// TODO: Penurunan hanya ke satu kelas
class Cat extends Animal {
  constructor(name) {
    super();
    this.name = name;
  }

  walk() {
    console.log(`${this.name} walked`);
  }
}

const oren = new Cat("Orange");
console.log(oren.walk()); // Orange walked
