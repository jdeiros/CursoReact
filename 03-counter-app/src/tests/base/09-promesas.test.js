import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";



describe('Pruebas con promesas', () => {
  
    test('getHeroeByIdAsync debe retornar un Heroe async', (done) => {
    
        const id = 1;
        getHeroeByIdAsync( id )
            .then( heroe => {
                expect(heroe).toBe(heroes[0]);
                done(); //le decimos que ya terminamos de hacer todo el proceso

            });

    });
    
    test('debe obtener un error si el heroe por id no existe', (done) => {
      
        const id = 10;
        getHeroeByIdAsync( id )
            .catch( error => {

                //expect( error ).toBe('No se pudo encontrar el héroe');
                done();

            });
    });
    //cuando llamamos a tareas asincronas, el argumento done es otro callback
    //que usamos para indicarle a jest cuando terminamos y no estamos esperando
    //mas resultados de estas tareas asincronas
});
