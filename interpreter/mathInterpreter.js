// mathInterpreter.js

// Definición de la clase MathInterpreter
class MathInterpreter {
    // Constructor que recibe una expresión matemática como parámetro
    constructor(expression) {
        // Almacena la expresión recibida en una propiedad de la instancia
        this.expression = expression;
    }

    // Método interpret() que evalúa la expresión matemática y devuelve el resultado
    interpret() {
        // Utiliza la función eval() de JavaScript para interpretar y ejecutar la expresión
        return eval(this.expression);
    }
}

// Exporta la clase MathInterpreter para que pueda ser utilizada en otros archivos
module.exports = MathInterpreter;

