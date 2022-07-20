class Product {
  constructor() {
    if (this.constructor.name === "Product") {
      throw new Error(`${this.constructor.name} is abstract class!`);
    }
  }
  // wajib diturunkan
  getName() {
    throw new Error("Method not implemented!");
  }

  // wajib diturunkan
  getExpiredDate() {
    throw new Error("Method not implemented!");
  }

  getProductInfo() {
    // some magic code
  }
}

// Tidak ada masalah karena memang sayuran punya masa kadaluarsa
class Vegetable extends Product {
  getName() {
    return "Brocoli";
  }

  getExpiredDate() {
    return new Date();
  }
}

// Smartphone tidak punya kadaluarsa dong....
class Smartphone extends Product {
  getName() {
    return "Samsung S10+ Special Edition";
  }

  // Nah disini masalahnya karena harus diimplementasikan
  getExpiredDate() {
    return new Date();
  }
}
