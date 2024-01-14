import { getHeroeByIdAsync } from "../../base-pruebas/09-promesas";

describe('Pruebas en 09-promesas', () => { 

    test('getHeroesByIdAsync debe de retornar un heroe: ', ( done ) => {

        const id = 1;
        getHeroeByIdAsync( id )
            .then( hero => {
               
                expect( hero ).toEqual({
                    id    : 1,
                    name  : 'Batman',
                    owner : 'DC'

                });

                done();

            })

     });

    test('getHeroebyIdAsync debe de tener un error si heroe ID no existe', ( done ) => { 

        const id = 100;
        getHeroeByIdAsync( id )
            .catch( error => {
                // console.log( error );
                // done();

                expect( error ).toBe( `No se pudo encontrar el héroe ${ id }` )

                done();

            })

    })

})