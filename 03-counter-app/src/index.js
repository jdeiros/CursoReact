import React from 'react';
import ReactDOM from 'react-dom';
import PrimeraApp from "./PrimeraApp";
import './index.css'

const divRoot = document.querySelector('#root');

ReactDOM.render(<PrimeraApp saludo="Hola Mundo"/>, divRoot);
// ReactDOM.render(<PrimeraApp />, divRoot);

/*
ReactDOM nos permite crear nuestro arbol de componentes, 
eso a su ves nos permite comunicarnos entre componentes.
*/