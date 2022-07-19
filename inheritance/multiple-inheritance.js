// Satu class inherit ke 2 class

let oviviparMixins = (Base) => class extends Base {};
let viviparMixins = (Base) => class extends Base {};

class Ovovipar {}

class Snake extends oviviparMixins(viviparMixins(Ovovipar)) {}

//* this method useless to use in software developer
