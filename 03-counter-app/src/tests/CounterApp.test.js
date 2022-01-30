import {shallow} from 'enzyme';
import React from 'react';
import CounterApp from '../CounterApp';

describe('Pruebas en el <CounterApp />', () =>{

    let wrapper = shallow( <CounterApp /> );;

    beforeEach(() => {

        wrapper = shallow( <CounterApp /> );

    });
    test('debe mostrar <CounterApp /> correctamente', () => {
    
        expect( wrapper ).toMatchSnapshot();

    });
    
    test('debe mostrar el valor por defecto de 100', () => {
        
        const wrapper = shallow( <CounterApp /> ); //value= {100}

        const counterText = wrapper.find('h2').text().trim();
        console.log(counterText);
        expect(counterText).toBe('0');

    });

    test('debe incrementar el contador', () => {
        
        wrapper.find('button').at(0).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('1');
    });
    
    test('debe decrementar el contador', () => {
        
        wrapper.find('button').at(2).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('-1');
    });
    
    test('debe colocar el valor por defecto', () => {
      
        const wrapper = shallow( <CounterApp value= {100}/> ); 
        
    });
    
});