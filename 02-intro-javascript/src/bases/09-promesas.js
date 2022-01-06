//promesas
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise
import { getHeroesById } from './08-imp-exp';

// const promesa = new Promise((resolve, reject) => {

//     setTimeout(() => {

//         const p1 = getHeroesById(2);
//         // reject(p1);
//         reject('No se pudo encontrar el héroe');

//     }, 2000);

// }); 

// promesa.then((heroe) => {
//     console.log('heroe', heroe);
// })
// .catch((err) => console.warn(err));

const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const p1 = getHeroesById(id);
            if (p1) {
                resolve(p1);
            } else {
                reject('No se pudo encontrar el heroe');
            }
        });
    });

}
// getHeroeByIdAsync(10)
//     .then((heroe) => console.log('Heroe', heroe))
//     .catch(err => console.warn(err))

getHeroeByIdAsync(2)
    .then(console.log)
    .catch(console.warn)