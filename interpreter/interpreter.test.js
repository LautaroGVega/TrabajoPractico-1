const { Context, TerminalExpression, OrExpression } = require('./interpreter'); // Ajusta la ruta según tu estructura de carpetas

test('TerminalExpression interpreta correctamente', () => {
    const context = new Context('apple banana orange');
    const expression = new TerminalExpression('apple');
    expect(expression.interpret(context)).toBe(true);
});

test('OrExpression interpreta correctamente', () => {
    const context = new Context('apple banana orange');
    const expression1 = new TerminalExpression('apple');
    const expression2 = new TerminalExpression('cherry');
    const orExpression = new OrExpression(expression1, expression2);
    expect(orExpression.interpret(context)).toBe(true);
});
