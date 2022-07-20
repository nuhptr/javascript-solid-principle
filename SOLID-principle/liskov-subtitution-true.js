class Product {
  constructor() {
    if (this.constructor.name === "Product") {
      throw new Error(`${this.constructor.name} is abstract class!`);
    }
  }

  getName() {
    throw new Error("Method not implemented!");
  }

  getProductInfo() {
    // some magic code
  }
}

// Buatkan abstract untuk produk berupa makanan
class FoodProduct extends Product {
  constructor() {
    super();

    if (this.constructor.name === "FoodProduct") {
      throw new Error(`${this.constructor.name} is abstract class!`);
    }
  }

  getExpiredDate() {
    throw new Error("Method not implemented!");
  }
}

class Vegetable extends FoodProduct {
  getExpiredDate() {
    return new Date();
  }

  getName() {
    return "Brocoli";
  }
}

// class smarthphone bisa langsung ke superclassnya
class Smartphone extends Product {
  getName() {
    return "Redmi 11 Lite ";
  }

  // Tidak ada expired
}
