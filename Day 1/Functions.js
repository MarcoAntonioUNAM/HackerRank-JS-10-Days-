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

//Codigo realizado - Code carried out for the proposed exercise
let factorial = n =>{
    if (n === 0){
        return 1;
    }else{
        return n * factorial(n-1);
    }
}
//Fin del codigo realizado - End of code done


function main() {
    const n = +(readLine());

    console.log(factorial(n));
}