//Codigo realizado - Code carried out for the proposed exercise
function main() {
    let radio = readLine();

    // Print the area of the circle: - Imprime el area del circulo:
    console.log(Math.PI * radio * radio);

    // Print the perimeter of the circle: - Imprime el perimetro del circulo:
    console.log(2 * Math.PI * radio);


    try {
        // Attempt to redefine the value of constant variable PI
        PI = 0;
        // Attempt to print the value of PI
        console.log(PI);
    } catch(error) {
        console.error("You correctly declared 'PI' as a constant.");
    }
}
//Fin del codigo realizado - End of code done
