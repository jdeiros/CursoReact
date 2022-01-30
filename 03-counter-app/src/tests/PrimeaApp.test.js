import React from 'react';
import PrimeraApp from "../PrimeraApp";
import {render} from '@testing-library/react';
import {shallow } from 'enzyme';



describe('Pruebas en <PrimeraApp />', () => {
    // test('debe retornar "Hola, soy Goku"', () => {
      
    //     const saludo = 'Hola, soy Goku';
    //     const {getByText} = render(<PrimeraApp saludo = { saludo } />);
    //     expect( getByText(saludo) ).toBeInTheDocument();
    // });
    
    //ahora con enzyne
    //https://enzymejs.github.io/enzyme/

    test('debe mostrar <PrimeraApp/> correctamente', () => {
        const saludo = 'Hola, soy Goku';
        const wrapper = shallow( <PrimeraApp saludo={saludo}/> );
    
        expect(wrapper).toMatchSnapshot();
        // https://www.npmjs.com/package/enzyme-to-json

    });
    
    test('debe mostrar el subtitulo enviado por props', () => {
    
        const saludo = 'Hola, soy Goku';
        const subTitulo = 'Soy un subtitulo';
        const wrapper = shallow( 
            <PrimeraApp 
                saludo={saludo}
                subtitulo={subTitulo}
            /> );

        const textoParrafo = wrapper.find('p').text();
        expect(textoParrafo).toBe(subTitulo);

    });
    
    

});


/*
En la próxima clase instalaremos Enzyme, el cual ayuda mucho a probar componentes en React.

Aún no actualizan el sitio web y la librería para React 17, pero temporalmente pueden usar esta:

https://github.com/wojtekmaj/enzyme-adapter-react-17


La instalación y su uso es idéntico, sólo tengan presente esto.

*/