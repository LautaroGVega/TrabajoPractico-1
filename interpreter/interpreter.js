// Contexto
class Context {
    constructor(input) {
        this.input = input;
    }
}

// Expresión abstracta
class Expression {
    interpret(context) {
        throw new Error('Método interpret no implementado');
    }
}

// Expresión terminal
class TerminalExpression extends Expression {
    constructor(data) {
        super();
        this.data = data;
    }

    interpret(context) {
        return context.input.includes(this.data);
    }
}

// Expresión no terminal
class OrExpression extends Expression {
    constructor(expression1, expression2) {
        super();
        this.expression1 = expression1;
        this.expression2 = expression2;
    }

    interpret(context) {
        return this.expression1.interpret(context) || this.expression2.interpret(context);
    }
}

module.exports = { Context, TerminalExpression, OrExpression };
