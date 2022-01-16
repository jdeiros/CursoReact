//async / await

// const getImagenPromesa = () => new Promise(resolve => resolve('https://urlfantasma.com'));
// getImagenPromesa().then(console.log);

// pero usando async, me devuelve ya una promesa y lo puedo escribir asi:
//asi es mucho mas legible.
// const getImagen = async () =>{
//     return 'https://urlfantasma.com';
// }
// getImagen().then(console.log);


//el async va siempre de la mano con el await.

try {
    const getImagen = async () =>{
        const apiKey = 'ahC7Yt8U72dwGvxkuSZdltU86g2dHETS';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        //-> siguiente instrucción
        //con el await lo que hace es que ahora resp sea del tipo Response, es decir
        //el await le dice: espera que esta promesa fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
        //termina antes de seguir ejecutando la siguiente instruccion.
        const { data } = await resp.json();
        const { url } = data.images.original;
        
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    }
    getImagen();

} catch (error) {
    //manejo del error
    console.error(error);
}

