const Automovil = require('./Automovil');
const Camion = require('./Camion');

test('El método viajar de Automovil funciona correctamente', () => {
  const automovil = new Automovil();
  const spyArrancar = jest.spyOn(automovil, 'arrancar');
  const spyConducir = jest.spyOn(automovil, 'conducir');
  const spyDetenerse = jest.spyOn(automovil, 'detenerse');

  automovil.viajar();

  expect(spyArrancar).toHaveBeenCalled();
  expect(spyConducir).toHaveBeenCalled();
  expect(spyDetenerse).toHaveBeenCalled();
});

test('El método viajar de Camion funciona correctamente', () => {
  const camion = new Camion();
  const spyArrancar = jest.spyOn(camion, 'arrancar');
  const spyConducir = jest.spyOn(camion, 'conducir');
  const spyDetenerse = jest.spyOn(camion, 'detenerse');

  camion.viajar();

  expect(spyArrancar).toHaveBeenCalled();
  expect(spyConducir).toHaveBeenCalled();
  expect(spyDetenerse).toHaveBeenCalled();
});
