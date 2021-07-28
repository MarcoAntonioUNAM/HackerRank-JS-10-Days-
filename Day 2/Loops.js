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
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 *
 * |-------------------------------------------------------------------------------|
 * | Traduccion a Español para estudiantes con poco nivel de Ingles                |
 * | Ejercicios de de la Pagina de HackerRank 10 Dias de JavaScript                |
 * |-------------------------------------------------------------------------------|
 * Completa la función de vowelsAndConsonants.
 * Imprima su salida usando 'console.log ()'.
 **/
//Codigo realizado - Code carried out for the proposed exercise
function vowelsAndConsonants(s) {
    //Vocales  - vowels
    var vowels = ['a','e','i','o','u'];
    for (var i = 0; i < s.length; i++){
        if(vowels.indexOf(s[i])>-1)
            console.log(s[i]);
    }
    for(var i = 0; i < s.length; i++){
        if(vowels.indexOf(s[i])<0)
            console.log(s[i]);
    }
}
//Fin del codigo realizado - End of code done

function main() {
    const s = readLine();

    vowelsAndConsonants(s);
}