function regexVar() {
    /**
     * Declare a RegExp object variable named 're'
     * It must match ALL occurrences of numbers in a string.
     *  Create the function factorial here
     *  |-------------------------------------------------------------------------------|
     *  | Traduccion a Español para estudiantes con poco nivel de Ingles                |
     *  | Ejercicios de de la Pagina de HackerRank 10 Dias de JavaScript                |
     *  |-------------------------------------------------------------------------------|
     * Declare una variable de objeto RegExp llamada 're'
     * Debe coincidir con TODAS las apariciones de números en una cadena.
     * Crea la función factorial aquí
     **/

    const re = new RegExp(/([\d]+)/g);
    /**
     * Do not remove the return statement
     * No elimine la declaración de devolución
     **/
    return re;
}

function main() {
    const re = regexVar();
    const s = readLine();

    const r = s.match(re);

    for (const e of r) {
        console.log(e);
    }
}