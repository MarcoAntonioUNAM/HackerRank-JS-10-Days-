/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 *  |-------------------------------------------------------------------------------|
 *  | Traduccion a Español para estudiantes con poco nivel de Ingles                |
 *  | Ejercicios de de la Pagina de HackerRank 10 Dias de JavaScript                |
 *  |-------------------------------------------------------------------------------|
 *  Implementar una clase Polygon con las siguientes propiedades:
 *  1. Un constructor que toma una matriz de longitudes de lados enteros.
 *  2. Un método de 'perímeter' que devuelve la suma de las longitudes de los lados del polígono.
 */
class Polygon{
    constructor(heights){
        var polygon_perimeter = 0;
        for(var index in heights){
            polygon_perimeter += heights[index];
        }
        this.my_perimeter = polygon_perimeter;
    }

    perimeter(){
        return this.my_perimeter;
    }
}

const rectangle = new Polygon([10, 20, 10, 20]);
const square = new Polygon([10, 10, 10, 10]);
const pentagon = new Polygon([10, 20, 30, 40, 43]);

console.log(rectangle.perimeter());
console.log(square.perimeter());
console.log(pentagon.perimeter());