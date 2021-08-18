/*
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 *
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 *  |-------------------------------------------------------------------------------|
 *  | Traduccion a Español para estudiantes con poco nivel de Ingles                |
 *  | Ejercicios de de la Pagina de HackerRank 10 Dias de JavaScript                |
 *  |-------------------------------------------------------------------------------|
 * Devuelve un recuento del número total de objetos 'o' que satisfacen o.x == o.y.
 *
 * Parámetro (s):
 * objetos: una matriz de objetos con propiedades enteras 'x' e 'y'
 */
function getCount(objects) {
    var count = 0;
    for(var index in objects){
        if(objects[index].x == objects[index].y){
            count++;
        }
    }
    return count
}


function main() {
    const n = +(readLine());
    let objects = [];

    for (let i = 0; i < n; i++) {
        const [a, b] = readLine().split(' ');

        objects.push({x: +(a), y: +(b)});
    }

    console.log(getCount(objects));
}