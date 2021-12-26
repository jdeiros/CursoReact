// 18. Desestructuración de Objetos.
// Asignación Desestructurante: 
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
}

// console.log( persona.nombre);
// console.log( persona.edad);
// console.log( persona.clave);

//pero en lugar de hacerlo asi, mejor:
// pone el atributo nombre de persona en nombre2
// const {nombre:nombre2} = persona;

// console.log( nombre2);

//o bien, lo mas usado:
// const {nombre, edad, clave} = persona;

// console.log( nombre);
// console.log( edad);
// console.log( clave);

// ejemplo de desestructuracion en funciones
// const retornaPersona = (usuario) => {
//     console.log(usuario)
// }
// retornaPersona(persona);

// const retornaPersona = (usuario) => {
//     const  {nombre, edad, clave} = usuario;
//     console.log(edad, clave, nombre)
// }
// retornaPersona(persona);

// Desestructuración en el argumento
// const retornaPersona = ({nombre, edad}) => {
//     console.log( nombre, edad );
// }
// retornaPersona(persona);

//con valores por default
// const retornaPersona = ({nombre, edad, rango = "capitan"}) => {
//     console.log( nombre, edad , rango);
// }
// retornaPersona(persona);

const usenContext = ({clave, nombre, edad, rango = "capitan"}) => {
    return {
        nombreClave: clave,
        anios: edad,
        latlng:{
            lat: 14.1232,
            lng: -12.3232
        }
    }
}
const {nombreClave, anios, latlng:{lat,lng}} = usenContext(persona);

console.log(nombreClave, anios);
console.log(lat, lng);