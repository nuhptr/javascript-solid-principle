class Dog {
  constructor(color, height, length, weight) {
    this.color = color;
    this.height = height;
    this.length = length;
    this.weight = weight;
  }

  // Function
  purring() {
    console.log("Meoww....");
  }

  eat() {
    this.weight = this.weight + 1;
  }
}
