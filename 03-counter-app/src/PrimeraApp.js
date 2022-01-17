/*
* este archivo es un componente.
* Los componentes, por convencion se los nombra con upper camel case.
* entonces ya con el nombre del archivo ya se de que se trata de un componente PrimeraApp.js 
* En React tenemos dos tipos de componentes, los que estan basados en clases: class
* y los que estan basados en funciones: const
* Aca vamos a usar los de funciones. FC -> Functional Component. esto se esta usando ahora en React.
* tiene que ver con los Hooks de React.
*/
import React from 'react';
import PropTypes from 'prop-types';
// import React,{ Fragment } from 'react';
// a traves de props (properties) puedo comunicarme entre componentes.
// pero en lugar de recibir props y despues hacer props.saludo
// lo que se usa es hacer la desestructuracion de props para obtener directamente
// a saludo: {saludo} y tambien le podemos dar un valor por default en caso que no 
// llegue esa variable cargada y se necesite para el proceso: {saludo = 'hola mundo'}
const PrimeraApp = ({ saludo, subtitulo}) =>{
    //podria usar <Fragment> </Fragment> si lo importo. 
    //pero mejor es usar <></> que es lo mismo y  no hace falta importar nada.
    // const saludo = {
    //     nombre: 'Jero',
    //     edad: '31'
    // };

    return (
            <>
                <h1>{saludo}</h1>
                {/* <pre>{ JSON.stringify(saludo,null,3) }</pre> */}
                <p>{subtitulo}</p>
            </>
            
        );
}//como es un componente, esperaría que devuelva algo de html

//validar la existencia de saludo
PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired,
    otra: PropTypes.number
}
PrimeraApp.defaultProps = {
    subtitulo: 'Soy un Subtitulo'
}

export default PrimeraApp;