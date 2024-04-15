class Circulo {
  constructor(radio) {
    this.radio = radio;
  }

  area() {
    return Math.PI * Math.pow(this.radio, 2);
  }
}

module.exports = Circulo;
