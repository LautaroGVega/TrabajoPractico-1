const Circulo = require('./Circulo');
const AdaptadorDeCuadrado = require('./AdaptadorDeCuadrado');
const Cuadrado = require('./Cuadrado');

test('El AdaptadorDeCuadrado debe calcular el área correctamente', () => {
  const circulo = new Circulo(5);
  const adaptador = new AdaptadorDeCuadrado(circulo);

  expect(circulo.area()).toBeCloseTo(78.54); // Área del círculo con radio 5
  expect(adaptador.area()).toBeCloseTo(50); // Área del cuadrado con lado calculado a partir del círculo
});

test('El AdaptadorDeCuadrado debe comportarse como un Cuadrado', () => {
  const circulo = new Circulo(5);
  const adaptador = new AdaptadorDeCuadrado(circulo);

  expect(adaptador.lado).toBeCloseTo(circulo.radio * Math.sqrt(2));
  expect(adaptador.area()).toBeCloseTo(Math.pow(circulo.radio * Math.sqrt(2), 2));
});

test('El AdaptadorDeCuadrado debe encajar correctamente en otro Cuadrado', () => {
  const circulo = new Circulo(4);
  const adaptador = new AdaptadorDeCuadrado(circulo);
  const cuadrado = new Cuadrado(5);

  // El adaptador (lado = 5) debería encajar en cuadrado (lado = 4)
  expect(adaptador.encajaOtroCuadrado(cuadrado)).toBe(true);

  // Pero cuadrado (lado = 4) no debería encajar en adaptador (lado = 5)
  expect(cuadrado.encajaOtroCuadrado(adaptador)).toBe(false);
});
