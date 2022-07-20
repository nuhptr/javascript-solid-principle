class Product {
  constructor(id, name, price) {
    if (this.constructor == Product) {
      throw new TypeError(
        `Abstract class "${this.constructor.name}" cannot be inisintiated directly`
      );

      this.id = id;
      this.name = name;
      this.price = price;
    }
  }
}

class ElectronicProduct extends Product {
  constructor(id, name, price, productionDate) {
    super(id, name, price);
    this._productionDate = productionDate;
  }
}

class ConsumableProduct extends Product {
  constructor(id, name, price, expiredDate) {
    super(id, name, price);
    this._expiredDate = expiredDate;
  }
}
