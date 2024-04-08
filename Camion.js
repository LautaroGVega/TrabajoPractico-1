const Vehiculo = require('./Vehiculo');

// Subclase Camion que redefine algunos pasos del algoritmo
class Camion extends Vehiculo {
  arrancar() {
    console.log('Arrancando el camión'); // Implementación específica para arrancar un camión
  }

  conducir() {
    console.log('Conduciendo el camión'); // Implementación específica para conducir un camión
  }

  detenerse() {
    console.log('Deteniendo el camión'); // Implementación específica para detener un camión
  }
}

module.exports = Camion; // Exportamos la clase Camion para poder usarla en otros archivos
