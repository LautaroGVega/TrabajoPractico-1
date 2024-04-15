const Cuadrado = require('./Cuadrado');
const Circulo = require('./Circulo');

class AdaptadorDeCuadrado extends Cuadrado {
  constructor(forma) {
    if (forma instanceof Cuadrado) {
      super(forma.lado);
    } else if (forma instanceof Circulo) {
      super(forma.radio * Math.sqrt(2));
    } else {
      throw new Error('Forma inválida proporcionada.');
    }
  }
}

module.exports = AdaptadorCuadrado;
