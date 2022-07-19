class Seller {
  constructor(id, name) {
    this._id = id;
    this._name = name;
  }
}

class User {
  constructor(id, name, sellers) {
    this._id = id;
    this._name = name;
    this._sellers = sellers;
  }
}
