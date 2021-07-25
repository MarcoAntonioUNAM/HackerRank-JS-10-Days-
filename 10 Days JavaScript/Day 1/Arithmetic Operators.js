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
 *   Calculate the area of a rectangle.
 *
 *   length: The length of the rectangle.
 *   width: The width of the rectangle.
 *
 *	Return a number denoting the rectangle's area.
 *  |-------------------------------------------------------------------------------|
 *  | Traduccion a Español para estudiantes con poco nivel de Ingles                |
 *  | Ejercicios de de la Pagina de HackerRank 10 Dias de JavaScript                |
 *  |-------------------------------------------------------------------------------|
 *  Calcula el área de un rectángulo.
 *
 *  longitud: la longitud del rectángulo.
 *  ancho: el ancho del rectángulo.
 *
 *  Devuelve un número que denota el área del rectángulo.
 **/
var getArea = (length, width)=> {
    let area;
    area = length * width;

    return area;
}

/**
 *   Calculate the perimeter of a rectangle.
 *
 *	length: The length of the rectangle.
 *   width: The width of the rectangle.
 *
 *	Return a number denoting the perimeter of a rectangle.
 *  |-------------------------------------------------------------------------------|
 *  | Traduccion a Español para estudiantes con poco nivel de Ingles                |
 *  | Ejercicios de de la Pagina de HackerRank 10 Dias de JavaScript                |
 *  |-------------------------------------------------------------------------------|
 *  Calcula el perímetro de un rectángulo.
 *
 *  longitud: la longitud del rectángulo.
 *  ancho: el ancho del rectángulo.
 *
 *  Devuelve un número que denota el perímetro de un rectángulo.
 *
 **/
var getPerimeter= (length, width) => {
    let perimeter;
    perimeter = 2 * (length + width);
    return perimeter;
}


function main() {
    const length = +(readLine());
    const width = +(readLine());

    console.log(getArea(length, width));
    console.log(getPerimeter(length, width));
}