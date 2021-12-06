// Variables y Constantes

const nombre = 'Jero';
let apellido = 'Deiros';

let edad = 41;


console.log(nombre, apellido, edad);

// var no se debe usar para declarar variables
if(true){
    //este scope genera una nueva variable nombre
    const nombre ='Vako';
    console.log(nombre);
}

console.log(nombre);

//para iniciar el server, me paro en la carpeta donde instale
//la aplicac9ion (aca es 02-intro-javascript) y ahi mismo:
//npm start