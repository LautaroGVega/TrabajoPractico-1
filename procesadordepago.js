// Facade
const { PasarelaPago, ValidadorPago } = require('./utilidadesPago');

class ProcesadorPago {
  static procesarPago(infoPago) {
    if (ValidadorPago.validarPago(infoPago)) { // Se llama al método de validación de pago
      PasarelaPago.procesarPago(infoPago.monto); // Se llama al método de procesamiento de pago
      return true;
    } else {
      console.log('El pago no es válido');
      return false;
    }
  }
}

module.exports = ProcesadorPago;
