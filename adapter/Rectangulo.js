// Definimos la clase Rectangulo
class Rectangulo {
    // Constructor que toma el ancho y el alto del rectángulo
    constructor(ancho, alto) {
      this.ancho = ancho;
      this.alto = alto;
    }
  
    // Método para calcular el área del rectángulo
    calcularArea() {
      return this.ancho * this.alto; // Retorna el área del rectángulo (ancho * alto)
    }
  }
  
  module.exports = Rectangulo; // Exportamos la clase Rectangulo para poder usarla en otros archivos
  