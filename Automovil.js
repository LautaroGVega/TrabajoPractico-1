const Vehiculo = require('./Vehiculo');

// Subclase Automovil que redefine algunos pasos del algoritmo
class Automovil extends Vehiculo {
  arrancar() {
    console.log('Arrancando el automóvil'); // Implementación específica para arrancar un automóvil
  }

  conducir() {
    console.log('Conduciendo el automóvil'); // Implementación específica para conducir un automóvil
  }

  detenerse() {
    console.log('Deteniendo el automóvil'); // Implementación específica para detener un automóvil
  }
}

module.exports = Automovil; // Exportamos la clase Automovil para poder usarla en otros archivos
