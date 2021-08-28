/*
 * Determine the original side lengths and return an array:
 * - The first element is the length of the shorter side
 * - The second element is the length of the longer side
 * 
 * Parameter(s):
 * literals: The tagged template literal's array of strings.
 * expressions: The tagged template literal's array of expression values (i.e., [area, perimeter]).
 *  |-------------------------------------------------------------------------------|
 *  | Traduccion a Español para estudiantes con poco nivel de Ingles                |
 *  | Ejercicios de de la Pagina de HackerRank 10 Dias de JavaScript                |
 *  |-------------------------------------------------------------------------------|
 * Determine las longitudes de los lados originales y devuelva una matriz:
 * - El primer elemento es la longitud del lado más corto
 * - El segundo elemento es la longitud del lado más largo
 *
 * Parámetro (s):
 * literales: la matriz de cadenas de literal de plantilla etiquetada.
 * expresiones: la matriz de valores de expresión del literal de plantilla etiquetado (es decir, [área, perímetro]).
 */
function calculateSides(a,p){
    let results = [];
    let term = Math.sqrt((p * p)-(16 * a));
    results.push((p + term)/ 4.0);
    results.push((p - term)/ 4.0);
    results.sort(function(a,b){
        return a - b;
    })
    return results;
}

function sides(literals, ...expressions) {
    let area = expressions[0];
    let perimeter = expressions[1];
    return calculateSides(area,perimeter);
}
