import React, { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const [count, setCount] = useState([]);

    const [images, setImages] = useState([]);

    useEffect(() => {
        getGifs(category)
            .then(imgs => setImages(imgs));
    }, [category]); // [category] hace que si la category cambia va a volver a ejecutar este efecto



    return (
        <>
            <h3> {category} </h3>
            <div className="card-grid">
                {
                    images.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div>
        </>
    )
}
