//operador ternario
//javascript, dudas: https://developer.mozilla.org/es/


const activo = true;


// const mensaje = (activo) ? 'Activo':'Inactivo';
// const mensaje = (activo) ? 'Activo': null;
const mensaje = activo && 'Activo';
console.log(mensaje);