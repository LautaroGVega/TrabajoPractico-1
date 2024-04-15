const { Context, RomanInterpreter, NonTerminalExpression, TerminalExpression } = require('./interpreter2');

describe('Interpreter Pattern Tests', () => {
    let context;
    let romanInterpreter;

    beforeEach(() => {
        context = new Context();
        romanInterpreter = new RomanInterpreter(context);
    });

    test('TerminalExpression should return correct value for single Roman numeral', () => {
        const terminalExpression = new TerminalExpression('X');
        expect(terminalExpression.interpret(context)).toBe(10);
    });

    test('NonTerminalExpression should return correct value for addition of two Roman numerals', () => {
        const expression = new NonTerminalExpression(
            new TerminalExpression('X'),
            new TerminalExpression('V')
        );
        expect(expression.interpret(context)).toBe(15);
    });

    test('RomanInterpreter should correctly interpret complex expression', () => {
        const expression = new NonTerminalExpression(
            new TerminalExpression('M'),
            new NonTerminalExpression(
                new TerminalExpression('C'),
                new TerminalExpression('C')
            )
        );
        expect(romanInterpreter.interpret(expression)).toBe(1200);
    });
});