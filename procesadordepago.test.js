const ProcesadorPago = require('./procesadordepago');

test('Procesamiento de pago exitoso', () => {
  const infoPago = {
    usuario: 'usuario123',
    monto: 50
  };

  // Se prueba si el procesamiento de pago es exitoso
  expect(ProcesadorPago.procesarPago(infoPago)).toBe(true);
});

test('Pago inválido', () => {
  const infoPago = {
    usuario: 'usuario123',
    monto: -10 // Cantidad de pago negativa para simular un pago inválido
  };

  // Se prueba si se detecta correctamente un pago inválido
  expect(ProcesadorPago.procesarPago(infoPago)).toBe(false);
});
