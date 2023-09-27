// CLASE PRIMITIVA //

var string = new String('esto es un string')
console.log("string", string);

// clases de primitiva

var number = new Number(12)
console.log("number", number);

var boolean = new Boolean(true)
console.log("boolean", boolean);




// CLASES COMPUESTAS//

var array = new Array("rojo", "amarillo", "verde")
console.log("array", array);

var object = new Object({nombre: "Juan", apellido: "Perez"})       
console.log("object", object);


// CREAMOS NOSOTROS //
//propiedades publicas//

function Persona(){

    this.nombre;
    this.edad;
}

var yo = new Persona()
yo.nombre = "Juan";
yo.edad = "20 años";
console.log("yo", yo);



//CREAMOS CON PARAMETROS//

function Animales(nombre, raza){

    this.nombre = nombre;
    this.raza = raza;
}
var perro = new Animales("perro", "Labrador");
console.log("perro", perro);    