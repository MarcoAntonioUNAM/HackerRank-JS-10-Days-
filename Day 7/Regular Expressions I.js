function regexVar() {
    /**
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     *  |-------------------------------------------------------------------------------|
     *  | Traduccion a Español para estudiantes con poco nivel de Ingles                |
     *  | Ejercicios de de la Pagina de HackerRank 10 Dias de JavaScript                |
     *  |-------------------------------------------------------------------------------|
     * Declare una variable de objeto RegExp llamada 're'
     * Debe coincidir con una cadena que comience y termine con la misma vocal (es decir, {a, e, i, o, u})
     **/
    const regexString = '^([aeiou]).*\\1$';
    const re = new RegExp(regexString);

    /**
     * Do not remove the return statement
     * No elimine la declaración de return
     **/
    return re;
}

function main() {
    const re = regexVar();
    const s = readLine();

    console.log(re.test(s));
}