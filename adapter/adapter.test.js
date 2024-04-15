const Cuadrado = require('./Cuadrado');
const AdaptadorCuadrado = require('./AdaptadorCuadrado');
const Rectangulo = require('./Rectangulo');

test('El AdaptadorCuadrado debe calcular el área correctamente', () => {
  const cuadrado = new Cuadrado(5);
  const adaptador = new AdaptadorCuadrado(5);

  expect(cuadrado.calcularArea()).toBe(25);
  expect(adaptador.calcularArea()).toBe(25);
});

test('El AdaptadorCuadrado debe comportarse como un Rectangulo', () => {
  const adaptador = new AdaptadorCuadrado(5);

  expect(adaptador.ancho).toBe(5);
  expect(adaptador.alto).toBe(5);
  expect(adaptador.calcularArea()).toBe(25);
});
