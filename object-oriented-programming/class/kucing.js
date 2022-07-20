class Kucing {
  // TODO: Property
  constructor(color = null, height = null, length = null, weight = null) {
    this._color = color;
    this._height = height;
    this._length = length;
    this._weight = weight;
  }

  // Getter Setter Color
  set color(value) {
    this._color = value;
  }

  get color() {
    return this._color;
  }

  // Getter Setter Height
  set height(value) {
    this._height = value;
  }

  get height() {
    return this._height;
  }

  // Getter Setter Length
  set length(value) {
    this._length = value;
  }

  get length() {
    return this._length;
  }

  // Getter Setter Weight
  set weight(value) {
    this._weight = value;
  }

  get weight() {
    return this._weight;
  }
}

const main = () => {
  const oren = new Kucing();
  oren.color = "Orange";
  oren.height = 20.0;
  oren.length = 46.0;
  oren.weight = 2.0;

  const bengal = new Kucing("Coklat", 22.0, 39.0, 2.3);
  const anggora = new Kucing("Abu-Abu", 25.0, 41.0, 2.4);

  console.log(oren);
  console.log(bengal);
  console.log(anggora);

  /*
  Kucing { _color: 'Orange', _height: 20, _length: 46, _weight: 2 }
  Kucing { _color: 'Coklat', _height: 22, _length: 39, _weight: 2.3 }
  Kucing { _color: 'Abu-Abu', _height: 25, _length: 41, _weight: 2.4 }
   */
};

main();
