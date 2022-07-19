// Inheritance 2 tingkat

class Animal {
  walk() {
    console.log(`${this.constructor.name} walk!`);
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super();
    this.name = name;
  }

  eat() {
    console.log(`${this.name} eat!`);
  }
}

class Cat extends Carnivore {}

const oren = new Cat("Orange");
console.log(oren.eat()); // Orange Eat
