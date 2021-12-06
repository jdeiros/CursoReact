//Objetos literales.
const persona ={
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 554433,
        lat: 14.222,
        lng: 34.343433
    }
}
console.log({persona});

//ojo esta asignacion copia referencia
//si modifico su referencia modifico el objeto original.
const persona2 = persona;
persona2.nombre = 'Peter';
console.log(persona2);
console.log(persona);

//con esto si hago un clon del objeto
const persona3 = { ...persona };
persona3.nombre = 'Richard';

console.log(persona3);
console.log(persona2);
