class Productservices {
  constructor() {
    throw new console.error(
      `abstract class "${this.constructor.name}" cannot be inisiated instanly`
    );
  }

  getProduct(id) {
    throw new error("You have implementation the method getProduct!");
  }

  calculateProductPrice() {
    throw new error("you have implement the method calculateProductPrice");
  }
}

class ProductServiceImpl extends Productservices {
  getProduct(id) {
    // Implementation code
  }

  calculateProductPrice() {
    // implementation code
  }
}
