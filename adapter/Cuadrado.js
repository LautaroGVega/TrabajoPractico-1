// Definimos la clase Cuadrado
class Cuadrado {
    // Constructor que toma el lado del cuadrado
    constructor(lado) {
      this.lado = lado;
    }
  
    // Método para calcular el área del cuadrado
    calcularArea() {
      return this.lado ** 2; // Retorna el área del cuadrado (lado * lado)
    }
  }
  
  module.exports = Cuadrado; // Exportamos la clase Cuadrado para poder usarla en otros archivos
  