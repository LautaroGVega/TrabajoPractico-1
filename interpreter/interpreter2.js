// Client
class RomanInterpreter {
    constructor(context) {
        this.context = context;
    }

    interpret(expression) {
        return expression.interpret(this.context);
    }
}

// Context
class Context {
    constructor() {
        this.romanNumerals = {
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000
        };
    }

    getRomanNumeral(roman) {
        return this.romanNumerals[roman];
    }
}

// AbstractExpression
class AbstractExpression {
    interpret(context) {}
}

// TerminalExpression
class TerminalExpression extends AbstractExpression {
    constructor(roman) {
        super();
        this.roman = roman;
    }

    interpret(context) {
        return context.getRomanNumeral(this.roman);
    }
}

// NonTerminalExpression
class NonTerminalExpression extends AbstractExpression {
    constructor(expression1, expression2) {
        super();
        this.expression1 = expression1;
        this.expression2 = expression2;
    }

    interpret(context) {
        return this.expression1.interpret(context) + this.expression2.interpret(context);
    }
}

// Example Usage
const context = new Context();
const romanInterpreter = new RomanInterpreter(context);

const expression = new NonTerminalExpression(
    new TerminalExpression('M'),
    new NonTerminalExpression(
        new TerminalExpression('C'),
        new TerminalExpression('C')
    )
);

console.log(romanInterpreter.interpret(expression)); // Output: 1200

module.exports = {
    Context,
    RomanInterpreter,
    TerminalExpression,
    NonTerminalExpression
};