class Employee {
  walk() {
    console.log(`${this.constructor.name} walk!`);
  }
}

class Male extends Employee {
  walk() {
    // polymorphism => pemanggilan function superclassnya
    super.walk();
    console.log(`Yeay! ${this.constructor.name} walked!`);
  }
}

const main = () => {
  const male = new Male();
  male.walk();
};

main();
