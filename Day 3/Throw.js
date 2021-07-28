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
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 * |-------------------------------------------------------------------------------|
 * | Traduccion a Español para estudiantes con poco nivel de Ingles                |
 * | Ejercicios de de la Pagina de HackerRank 10 Dias de JavaScript                |
 * |-------------------------------------------------------------------------------|
 * Complete la función isPositive.
 * Si 'a' es positivo, devuelve "SÍ".
 * Si 'a' es 0, arroja un error con el mensaje "Error cero"
 * Si 'a' es negativo, arroja un error con el mensaje "Error negativo"
 **/
//Codigo realizado - Code carried out for the proposed exercise
function isPositive(a) {
    if (a == 0)
        throw new Error("Zero Error");
    else if (a < 0)
        throw new Error("Negative Error");
    else
        return "YES";
}
//Fin del codigo realizado - End of code done


function main() {
    const n = +(readLine());

    for (let i = 0; i < n; i++) {
        const a = +(readLine());

        try {
            console.log(isPositive(a));
        } catch (e) {
            console.log(e.message);
        }
    }
}