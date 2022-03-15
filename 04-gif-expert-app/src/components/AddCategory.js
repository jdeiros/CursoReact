import React, { useState } from 'react';
import PropTypes from 'prop-types';
/* Aca estoy recibiendo la propiedad setCategories, la desestructura
 * de la forma { setCategories } porque en realidad por default recibimos
 * todas las props, eso lo ves cuando seleccionas el componente en 
 * debug (f12). si no desestructuramos, recibiriamos por parametros (props)
 * y luego llamamos a la funcion como props.setCategories
 */
export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');
  
    const handleInputChange = (e)=>{
        setInputValue(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        if( inputValue.trim().length > 2 ){
            setCategories( cats => [ ...cats, inputValue]);
            setInputValue('');
        }
    }
    return (
    <form onSubmit={handleSubmit}>
        
        <input 
            type="text"
            value={inputValue}
            onChange={handleInputChange}
        />

    </form>
  )
}

/* con esto me aseguro de que cuando uso este componente
 * en otro componente, como es el caso de GifExpertApp, la propiedad
 * setCategories será requerida. Es decir, que si usan el componente
 * pero no me mandan por parametro esta propiedad dará error.
 */
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}