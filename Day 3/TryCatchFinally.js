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
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 *  |-------------------------------------------------------------------------------|
 *  | Traduccion a Español para estudiantes con poco nivel de Ingles                |
 *  | Ejercicios de de la Pagina de HackerRank 10 Dias de JavaScript                |
 *  |-------------------------------------------------------------------------------|
 * Completa la función reverseString
 * Utilice console.log () para imprimir en stdout.
 **/
//Codigo realizado - Code carried out for the proposed exercise
function reverseString(s) {

    try {
        console.log(s.split("").reverse().join(""))
    }
    catch (e) {
        console.log(e.message);
        console.log(s);
    }

}
//Fin del codigo realizado - End of code done


function main() {
    const s = eval(readLine());

    reverseString(s);
}
