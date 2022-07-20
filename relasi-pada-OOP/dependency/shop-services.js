class ShopServices {
  changeProductPrice(price, product) {
    product.changePrice(price);
  }
}

class Product {
  constructor(id, name, price) {
    this._id = id;
    this._name = name;
    this._price = price;
  }

  changePrice(value) {
    this._price = value;
  }
}
