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
 *  Create the function factorial here
 *  |-------------------------------------------------------------------------------|
 *  | Traduccion a Español para estudiantes con poco nivel de Ingles                |
 *  | Ejercicios de de la Pagina de HackerRank 10 Dias de JavaScript                |
 *  |-------------------------------------------------------------------------------|
 *  Crea una funcion factorial aqui
 *
 **/

/** Funcion fatorial por metodo de flecha donde ponemos como condicionante una igualdad estricta para aceptar un numero mayor que cero
*   Si es igual a cero retornara uno
*   Si es diferente de cero entrara en la condicionante para el fatorial del numero elegido
*-------------------------------------------------------------------------------------------------------------------------------------------
*   Factorial function by arrow method where we put a strict equality as a condition to accept a number greater than zero
*   If it is equal to zero, it will return one.
*   If it is different from zero, it will enter the function for the fatorial of the chosen number
**/
let factorial = n =>{
    if (n === 0){
        return 1;
    }else{
        return n * factorial(n-1);
    }
}


function main() {
    const n = +(readLine());

    console.log(factorial(n));
}
