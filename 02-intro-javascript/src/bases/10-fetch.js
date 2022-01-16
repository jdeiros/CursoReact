// fetch API
// https://developers.giphy.com/
// https://developer.mozilla.org/es/docs/Web/API/Fetch_API
// json viewer awesome -> complemento del chrome para ver json formateado.
const apiKey = 'ahC7Yt8U72dwGvxkuSZdltU86g2dHETS';
const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

// peticion.then(resp => {
//     resp.json().then( data => {
//         console.log(data);
//     });
// })
// .catch(console.warn);

//lo mismo pero expresado como "promesas en cadena"
peticion
    .then(resp => resp.json() )
    .then(({data}) => {
        const {url} = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    })
    .catch(console.warn);