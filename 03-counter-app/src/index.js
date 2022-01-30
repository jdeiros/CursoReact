import React from 'react';
import ReactDOM from 'react-dom';
// import PrimeraApp from "./PrimeraApp";
import './index.css'
import CounterApp from './CounterApp';

const divRoot = document.querySelector('#root');

//ReactDOM.render(<PrimeraApp saludo="Hola Mundo"/>, divRoot);
// ReactDOM.render(<PrimeraApp />, divRoot);
// ReactDOM.render(<CounterApp value={0} />, divRoot);
ReactDOM.render(<CounterApp />, divRoot);
/*
ReactDOM nos permite crear nuestro arbol de componentes, 
eso a su ves nos permite comunicarnos entre componentes.
*/


// ReactDOM.render(<PrimeraApp saludo= "Hola, soy Goku"/>, divRoot);