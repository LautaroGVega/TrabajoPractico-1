const Cuadrado = require('./Cuadrado');
const Circulo = require('./Circulo');

class AdaptadorCuadrado extends Cuadrado {
  constructor(circulo) {
    const lado = circulo.radio * Math.sqrt(2);
    super(lado);
  }
}

module.exports = AdaptadorCuadrado;
