// mathInterpreter.test.js
const MathInterpreter = require('./mathInterpreter');

test('Debe interpretar una expresión matemática simple correctamente', () => {
    const expression = new MathInterpreter("2 + 3 * 4");
    expect(expression.interpret()).toEqual(14);
});

test('Debe interpretar una expresión matemática con funciones correctamente', () => {
    const expression = new MathInterpreter("Math.pow(2, 3) + Math.sqrt(16)");
    expect(expression.interpret()).toEqual(12);
});

test('Debe interpretar una expresión matemática compleja correctamente', () => {
    const expression = new MathInterpreter("(10 * 2 - 5) / 3");
    expect(expression.interpret()).toEqual(5);
});
