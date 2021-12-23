// Funciones en JS
const saludar = function saludar( nombre ){
    return `Hola ${nombre}`;
}
// lo que pasa es que si solo coloco function saludar 
// corro el riesgo de pisar mas adelante con una variable 
// que se llame saludar a lo que es la function
// entonces declaro la const saludar y le asigno la funcion

//funcion de flecha
const saludar2 = ( nombre ) => {
    return `Hola ${nombre}`;
}
//una notacion mas simple
const saludar3 = ( nombre ) =>  `Hola ${nombre}`;

console.log(saludar('Marisa'));
console.log(saludar2('Agustin'));
console.log(saludar3('Roberto'));

const getUser = () => {
    return {
        uid: 'BEE123',
        username: 'jbDragon'
    }
}

console.log(getUser());

//pero ojo, veamos este caso, las {} pueden generar error, 
//al ser confundidos con el cuerpo de la funcion en lugar de una coleccion
//entonces, lo que hago es envolver lo que devuelvo entre ():
const getUser2 = () => ({
        uid: 'FH1212',
        username: 'Fantasma'
    })

console.log(getUser2());