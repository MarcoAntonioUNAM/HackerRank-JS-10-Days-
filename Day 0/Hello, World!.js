'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/**
 *   A line of code that prints "Hello, World!" on a new line is provided in the editor.
 *   Write a second line of code that prints the contents of 'parameterVariable' on a new line.
 *
 *	Parameter:
 *   parameterVariable - A string of text.
 *
 *  |-------------------------------------------------------------------------------|
 *  | Traduccion a Español para estudiantes con poco nivel de Ingles                |
 *  | Ejercicios de de la Pagina de HackerRank 10 Dias de JavaScript                |
 *  |-------------------------------------------------------------------------------|
 *   Una línea de código que imprime "¡Hola, mundo!" en una nueva línea se proporciona en el editor.
 *   Escriba una segunda línea de código que imprima el contenido de 'parameterVariable' en una nueva línea.
 *
 *   Parámetro:
 *   parameterVariable: una cadena de texto.
 **/

//Codigo realizado - Code carried out for the proposed exercise
function greeting(parameterVariable) {
    // This line prints 'Hello, World!' to the console:
    // Esta línea imprime '¡Hola, mundo!' a la consola:
    console.log('Hello, World!');

    // Write a line of code that prints parameterVariable to stdout using console.log:
    // Escribe una línea de código que imprima parameterVariable en stdout usando console.log:
    console.log(parameterVariable);
}
//Fin del codigo realizado - End of code done


function main() {
    const parameterVariable = readLine();

    greeting(parameterVariable);
}