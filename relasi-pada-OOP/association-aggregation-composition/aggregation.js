class Shop {
  constructor(id, name) {
    this._id = id;
    this._name = name;
  }

  set seller(value) {
    this._seller = value;
  }

  get seller() {
    return this._seller;
  }
}

// Class shop bergantung ke class seller
class Seller {
  constructor(id, name) {
    this._id = id;
    this._name = name;
  }
}

const seller1 = new Seller(1, "Zsasa");
const shop1 = new Shop(1, "Kopi Lampung");

shop1.seller = seller1;
console.log(shop1.seller._id); // 1
console.log(shop1.seller._name); // zsasa
