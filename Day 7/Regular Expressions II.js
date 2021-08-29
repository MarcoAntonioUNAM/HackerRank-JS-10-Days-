function regexVar() {
    /**
     * Declare a RegExp object variable named 're'
     * It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.',
     * followed by one or more letters.
     *  |-------------------------------------------------------------------------------|
     *  | Traduccion a Español para estudiantes con poco nivel de Ingles                |
     *  | Ejercicios de de la Pagina de HackerRank 10 Dias de JavaScript                |
     *  |-------------------------------------------------------------------------------|
     * Declare una variable de objeto RegExp llamada 're'
     * Debe coincidir con una cadena que comience con 'Sr.', 'Sra.', 'Sra.', 'Dr.' o 'Er.',
     * seguido de una o más letras.
     **/
    const re = new RegExp(/^(Mr\.|Mrs\.|Ms\.|Dr\.|Er\.)[a-zA-Z]{1,}$/);

    /**
     * Do not remove the return statement
     * No elimine la declaración de return
     *
     **/
    return re;
}

function main() {
    const re = regexVar();
    const s = readLine();

    console.log(!!s.match(re));
}