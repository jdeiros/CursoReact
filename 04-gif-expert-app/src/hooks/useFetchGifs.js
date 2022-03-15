//todos los hooks empiezan con use..., en este caso "useFetchGifs"
//los hooks no son mas que funciones que pueden tener un estado.
import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {

        getGifs(category)
            .then(imgs => {
                setTimeout(() => {

                    setState({
                        data: imgs,
                        loading: false
                    });

                }, 3000);

            })

    }, [category]); // [category] hace que si la category cambia el estado va a volver a ejecutar este efecto

    return state; //{data:[], loading: true};
}
