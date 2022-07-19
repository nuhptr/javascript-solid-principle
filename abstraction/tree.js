class Tree {
  constructor() {
    if (this.constructor == Tree) {
      throw new Error("Abstract classes can't be instantiated");
    }
  }

  leaf() {
    throw new Error("Method 'leaf()' must be implemented");
  }

  oksigen() {
    console.log("need oksigen to fotosintesis");
  }
}

class Bugenvile extends Tree {
  leaf() {
    console.log("Have 10 leaf");
  }
}

class Lavender extends Tree {
  leaf() {
    console.log("Have 5 leaf");
  }
}

class Melati extends Tree {
  // Method 'leaf()' must be implemented
}

new Bugenvile().leaf(); // Have 10 leaf
new Lavender().leaf(); // Have 5 leaf
// new Melati().leaf();

new Bugenvile().oksigen(); // need oksigen to fotosintesis
new Lavender().oksigen(); // need oksigen to fotosintesis
