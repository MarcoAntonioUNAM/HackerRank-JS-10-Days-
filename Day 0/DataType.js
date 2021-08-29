/**
 *   The variables 'firstInteger', 'firstDecimal', and 'firstString' are declared for you -- do not modify them.
 *   Print three lines:
 *   1. The sum of 'firstInteger' and the Number representation of 'secondInteger'.
 *   2. The sum of 'firstDecimal' and the Number representation of 'secondDecimal'.
 *   3. The concatenation of 'firstString' and 'secondString' ('firstString' must be first).
 *	Parameter(s):
 *   secondInteger - The string representation of an integer.
 *   secondDecimal - The string representation of a floating-point number.
 *   secondString - A string consisting of one or more space-separated words.
 *  |-------------------------------------------------------------------------------|
 *  | Traduccion a Español para estudiantes con poco nivel de Ingles                |
 *  | Ejercicios de de la Pagina de HackerRank 10 Dias de JavaScript                |
 *  |-------------------------------------------------------------------------------|
 *   Las variables 'firstInteger', 'firstDecimal' y 'firstString' se declaran automáticamente; no las modifique.
 *   Imprime tres líneas:
 *   1. La suma de 'firstInteger' y la representación numérica de 'secondInteger'.
 *   2. La suma de 'firstDecimal' y la representación numérica de 'secondDecimal'.
 *   3. La concatenación de 'firstString' y 'secondString' ('firstString' debe ser el primero).
 *
 *   Parámetro (s):
 *   secondInteger: la representación de cadena de un entero.
 *   secondDecimal: la representación de cadena de un número de punto flotante.
 *   secondString: una cadena que consta de una o más palabras separadas por espacios.
 **/
//Codigo realizado - Code carried out for the proposed exercise
function performOperation(secondInteger, secondDecimal, secondString) {
    // Declare a variable named 'firstInteger' and initialize with integer value 4.
    // Declara una variable llamada 'firstInteger' e inicializa con un valor entero 4.
    const firstInteger = 4;

    // Declare a variable named 'firstDecimal' and initialize with floating-point value 4.0.
    // Declara una variable llamada 'firstDecimal' e inicializa con el valor de coma flotante 4.0.
    const firstDecimal = 4.0;

    // Declare a variable named 'firstString' and initialize with the string "HackerRank".
    // Declare una variable llamada 'firstString' e inicialice con la cadena "HackerRank".
    const firstString = 'HackerRank ';

    // Write code that uses console.log to print the sum of the 'firstInteger' and 'secondInteger' (converted to a Number type) on a new line.
    // Escribe el código que usa console.log para imprimir la suma del 'firstInteger' y  'secondInteger' (convertido a un tipo de número) en una nueva línea.
    console.log(firstInteger + parseInt(secondInteger));

    // Write code that uses console.log to print the sum of 'firstDecimal' and 'secondDecimal' (converted to a Number type) on a new line.
    // Escribe el código que usa console.log para imprimir la suma del 'firstDecimal' y el 'secondDecimal' (convertido a un tipo de número) en una nueva línea.
    console.log(firstDecimal + parseFloat(secondDecimal));

    // Write code that uses console.log to print the concatenation of 'firstString' and 'secondString' on a new line. The variable 'firstString' must be printed first.
    // Escribe código que usa console.log para imprimir la concatenación de 'firstString' y 'second String' en una nueva línea. La variable 'firstString' debe imprimirse primero.
    console.log(firstString + secondString);
}
//Fin del codigo realizado - End of code done

function main() {
    const secondInteger = readLine();
    const secondDecimal = readLine();
    const secondString = readLine();

    performOperation(secondInteger, secondDecimal, secondString);
}