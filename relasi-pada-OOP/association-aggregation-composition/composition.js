class User {
  constructor(id, name, address) {
    this._id = id;
    this._name = name;
    this._address = address;
  }
}

class Address {
  constructor(id, location) {
    this._id = id;
    this._location = location;
  }
}

const main = () => {
  const user = new User("1", "Adi Nugraha", new Address("2", "Bandung"));
  console.log(user);
  /**
   * User {
   _id: '1',
   _name: 'Adi Nugraha',
   _address: Address { _id: '2', _location: 'Bandung'
   * }
   */
  console.log(user._address._location); // Bandung
  console.log(user._name); // Adi Nugraha
};

main();
