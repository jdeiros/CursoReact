/*
* 1 - Crear un nuevo componente dentro de la carpeta SRC llamado CounterApp
* 2 - El CounterApp debe de ser un Functional Component
* 3 - El contenido del CounterApp debe de ser:
*    <h1>CounterApp</h1>
*    <h2> { value } </h2>
* 4 - Donde "value" es una propiedad enviada desde el padre hacia el componente CounterApp (Debe ser númerica validada con PropTypes)
* 5 - Reemplazar en el index.js el componente de por el componente (no se olviden del value que debe de ser un número)
* 6 - Asegúrense de no tener errores ni warnings (Cualquier warning no usado, comentar el código)

* ayuda: snippets: rafcp+Tab -> crea el functional component de una.
*/
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({value = 10}) =>{

    const [counter, setCounter] = useState(0);
    
    // handleAdd
    const handleAdd = () => {
        setCounter(counter + 1);
        // setCounter((c) => c + 1 );
    }

    // handleAdd
    const handleReset = () => setCounter(value);

    // handleAdd
    const handleSubstract = () => {
        setCounter(counter - 1);
        // setCounter((c) => c + 1 );
    }

    return (//doc eventos click: https://es.reactjs.org/docs/events.html
            <>
                <h1>CounterApp</h1>
                <h2>{ counter }</h2>
                <button onClick={ handleAdd }>+1</button>
                <button onClick={ handleReset }>Reset</button>
                <button onClick={ handleSubstract }>-1</button>
            </>            
        );
}

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp;