import React, { useEffect, useState } from 'react';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const [count, setCount] = useState([]);

    const [images, setImages] = useState([]);

    useEffect(() => {
        getGifs();
    }, []); //esto es para que no se ejecute cada vez que das enter

    const getGifs = async () => {

        const url = 'https://api.giphy.com/v1/gifs/search?q=Rick%20and%20Morty&limit=10&api_key=UqpQ94dC75D5jIlZtK911Pi7hvvQeeri';
        const resp = await fetch(url);
        const { data } = await resp.json();

        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })
        console.log(gifs);
        setImages(gifs);
    }

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
