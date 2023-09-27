// sin heredar desde una clase //

var object = {
    nombre : "Juan",
    edad : 31,
    descripcion: function(){
        console.log("su nombre es "+object.nombre+" y tiene "+object.edad+" años" )
    },
// metodo con parametros//
    saludar: function(saludo){

        console.log(saludo+" "+object.nombre)
        // EL OBJETO ES SALUDAR//
    }



}


object.descripcion(); // ESTE ES EL METODO//

// para sacar el nombre
console.log("nombre",object.nombre)
// para sacar la edad
console.log("edad",object.edad)



object.saludar("Hola")





//OBJETOS PRIMITIVOS
//OBJETO DATE ES PARA HORA Y FECHA 

var fecha = new Date();
console.log("fecha", fecha);

var años = fecha.getFullYear();
console.log("años", años);


