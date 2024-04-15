class Cuadrado {
  constructor(lado) {
    this.lado = lado;
  }

  area() {
    return Math.pow(this.lado, 2);
  }

  encajaOtroCuadrado(otroCuadrado) {
    return this.area() < otroCuadrado.area();
  }
}

module.exports = Cuadrado;
