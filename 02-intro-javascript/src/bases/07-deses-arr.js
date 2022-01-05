//desestructuracion de arrreglos
const personajes = ['Goku', 'Vegeta', 'Trunks'];
/*
console.log(personajes[0]);
console.log(personajes[1]);
console.log(personajes[2]);
*/

//desestructuracion
const [goku] = personajes;
const [, vegeta] = personajes;
const [, , trunks] = personajes;

console.log(goku);
console.log(vegeta);
console.log(trunks);

const retornaArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();

console.log(letras, numeros);

// Tarea
// 1. el primer valor del arr se llamara nombre
// 2. se llamara setNombre
const use_State = (valor) => {
    return [valor, () => { console.log('HOla mundo'); }];
}

const [nombre, setNombre] = use_State('Goku');

console.log(nombre);
setNombre();