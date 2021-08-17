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
//Codigo realizado - Code carried out for the proposed exercise

var getArea = (length, width)=> {
    let area;
    area = length * width;

    return area;
}
var getPerimeter= (length, width) => {
    let perimeter;
    perimeter = 2 * (length + width);
    return perimeter;
}
//Fin del codigo realizado - End of code done


function main() {
    const length = +(readLine());
    const width = +(readLine());

    console.log(getArea(length, width));
    console.log(getPerimeter(length, width));
}