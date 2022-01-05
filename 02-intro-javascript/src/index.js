import { heroes } from './data/heroes';
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/find

const getHeroesById = (id) => heroes.find((heroe) => heroe.id === id);


console.log(getHeroesById(2));

const getHeroesByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);

console.log(getHeroesByOwner('DC'));