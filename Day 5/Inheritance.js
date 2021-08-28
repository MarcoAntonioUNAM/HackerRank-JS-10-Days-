class Rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }
}

/*
*Write code that adds an 'area' method to the Rectangle class' prototype
*Create a Square class that inherits from Rectangle and implement its class constructor
*
*  |-------------------------------------------------------------------------------|
*  | Traduccion a Español para estudiantes con poco nivel de Ingles                |
*  | Ejercicios de de la Pagina de HackerRank 10 Dias de JavaScript                |
*  |-------------------------------------------------------------------------------|
* Escribir código que agregue un método de 'área' al "prototype" de la clase Rectangle
* Cree una clase Square que herede de Rectangle e implemente su constructor de clases
*/

Rectangle.prototype.area = function(){
    return this.w * this.h;
}
class Square extends Rectangle{
    constructor(a){
        super(a,a);
    }
}