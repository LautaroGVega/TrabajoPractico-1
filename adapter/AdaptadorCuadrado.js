const Rectangulo = require('./Rectangulo'); // Importamos la clase Rectangulo

// Definimos la clase AdaptadorCuadrado que actúa como adaptador para convertir Cuadrado en Rectangulo
class AdaptadorCuadrado extends Rectangulo {
  // Constructor que toma el lado del cuadrado
  constructor(lado) {
    super(lado, lado); // Llamamos al constructor de Rectangulo con el lado como ancho y alto para crear un Rectangulo con las mismas dimensiones
  }
}

module.exports = AdaptadorCuadrado; // Exportamos la clase AdaptadorCuadrado para poder usarla en otros archivos
