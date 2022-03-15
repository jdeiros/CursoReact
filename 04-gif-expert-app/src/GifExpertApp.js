import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = () => {
    //     setCategories(categs => [...categs, 'HunterXHunter']);
    //     console.log(categories);
    // }
    return (
        /* explicacion: aca se ve la forma de comunicarnos entre componentes.
         * Aca vemos que al componente AddCategory, le mandamos una propiedad
         * entonces, le mandamos la propiedad setCategories que va a ir con una
         * referencia a setCategories de este componente.
         */
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />

            <ol>
                {
                    categories.map(category => (
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    ))
                }
            </ol>
        </>
    )
}
