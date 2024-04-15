// Clase base Vehiculo que define el algoritmo básico
class Vehiculo {
    // Método template que define la estructura del algoritmo
    viajar() {
      this.arrancar(); // Llama al método arrancar (abstracto) que debe ser implementado por las subclases
      this.conducir(); // Llama al método conducir (abstracto) que debe ser implementado por las subclases
      this.detenerse(); // Llama al método detenerse (abstracto) que debe ser implementado por las subclases
    }
  
    // Métodos abstractos que deben ser implementados por las subclases
    arrancar() {
      throw new Error('Debe implementar el método arrancar'); // Lanza un error si no se implementa en la subclase
    }
  
    conducir() {
      throw new Error('Debe implementar el método conducir'); // Lanza un error si no se implementa en la subclase
    }
  
    detenerse() {
      throw new Error('Debe implementar el método detenerse'); // Lanza un error si no se implementa en la subclase
    }
  }
  
  module.exports = Vehiculo; // Exportamos la clase Vehiculo para poder usarla en otros archivos
  