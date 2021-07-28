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
 *   Return the second largest number in the array.
 *   @param {Number[]} nums - An array of numbers.
 *   @return {Number} The second largest number in the array.
 *  |-------------------------------------------------------------------------------|
 *  | Traduccion a Español para estudiantes con poco nivel de Ingles                |
 *  | Ejercicios de de la Pagina de HackerRank 10 Dias de JavaScript                |
 *  |-------------------------------------------------------------------------------|
 *  Devuelve el segundo número más grande de la matriz.
 *  @param {Number []} nums: una matriz de números.
 *  @return {Number} El segundo número más grande de la matriz.
 **/
//Codigo realizado - Code carried out for the proposed exercise
function getSecondLargest(nums) {
    let first;
    let second = 0;
    if(nums[0] > nums[1]){
        first = nums[0];
        second = nums[1];
    }
    else if(nums[0] == nums[1])
        first = nums[0];
    else{
        first = nums[1]
        second = nums[0];
    }

    for(let i = 1; i < nums.length;i++){
        if(nums[i] > first){
            second = first;
            first = nums[i];
        }
        else if(nums[0] == first)
            continue;
        else if(nums[i] > second && nums[i] != first)
            second = nums[i];
        else
            continue;
    }
    return second;
}
//Fin del codigo realizado - End of code done


function main() {
    const n = +(readLine());
    const nums = readLine().split(' ').map(Number);

    console.log(getSecondLargest(nums));
}