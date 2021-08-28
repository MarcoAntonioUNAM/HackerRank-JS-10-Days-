/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 * Parameter(s):
 * nums: An array of numbers.
 *  |-------------------------------------------------------------------------------|
 *  | Traduccion a Español para estudiantes con poco nivel de Ingles                |
 *  | Ejercicios de de la Pagina de HackerRank 10 Dias de JavaScript                |
 *  |-------------------------------------------------------------------------------|
 * Modificar y devolver la matriz para que todos los elementos pares se dupliquen y todos los impares se tripliquen.
 * Parámetro (s):
 * nums: una matriz de números.
 */
function modifyArray(nums) {
    for (let i = 0; i < nums.length; ++i) {
        if (nums[i] % 2 == 0) {
            nums[i] *= 2;
        }
        else {
            nums[i] *= 3;
        }
    }
    return nums;
}