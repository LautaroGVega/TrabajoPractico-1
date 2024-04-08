// Módulos de bajo nivel
class PasarelaPago {
  static procesarPago(monto) {
    console.log(`Procesando pago de ${monto} USD`);
    // Simulación de procesamiento de pago
    if (monto > 0) {
      console.log("Pago procesado exitosamente");
      return true;
    } else {
      console.log("Error: El monto del pago debe ser mayor que 0");
      return false;
    }
  }
}

class ValidadorPago {
  static validarPago(infoPago) {
    console.log(`Validando pago para ${infoPago.usuario}`);
    // Simulación de validación de pago
    if (infoPago.monto > 0) {
      console.log("Pago válido");
      return true;
    } else {
      console.log("Error: El monto del pago debe ser mayor que 0");
      return false;
    }
  }
}

module.exports = { PasarelaPago, ValidadorPago };
