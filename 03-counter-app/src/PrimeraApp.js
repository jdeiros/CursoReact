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
// import React,{ Fragment } from 'react';

const PrimeraApp = () =>{
    //podria usar <Fragment> </Fragment> si lo importo. 
    //pero mejor es usar <></> que es lo mismo y  no hace falta importar nada.
    // const saludo = {
    //     nombre: 'Jero',
    //     edad: '31'
    // };
    const saludo = 'Hola Mundo'
    return (
            <>
                <h1>{saludo}</h1>
                {/* <pre>{ JSON.stringify(saludo,null,3) }</pre> */}
                <p>Mi primera aplicación</p>
            </>
            
        );
}//como es un componente, esperaría que devuelva algo de html

export default PrimeraApp;