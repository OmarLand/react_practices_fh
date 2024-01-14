import { retornaArreglo } from "../../base-pruebas/07-deses-arr"

describe('Pruebas en 07-deses-arr', () => {

    test('Debe de retornar un String y un numero', () => { 

        const [ letters, numbers ] = retornaArreglo();
        // console.log( retorno );

        expect( letters ).toBe( 'ABC' );
        expect( numbers ).toBe( 123 );

    })

})