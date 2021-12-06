//Arreglos

//una forma (vieja) de crear arrays
// const arreglo = new Array();

//pero ya no se hace asi, sino asi.
const arreglo = [1,2,3,4];

// ojo que el push modifica el objeto principal, 
// no suele usarse asi
// arreglo.push(1);
// arreglo.push(2);
// arreglo.push(3);
// arreglo.push(4);

let arreglo2 = [...arreglo, 5];
// arreglo2.push(5);

//nota: esta pagina tiene mucha doc javascript muy copada:
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map
const arreglo3 = arreglo2.map( function(numero) {
    return numero * 2;
});
//function() es un callback, una funcion que se va a ejecutar dentro
//del metodo map()

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);