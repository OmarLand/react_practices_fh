import { getSaludo } from "../../base-pruebas/02-template-string";

describe('Pruebas sobre 02-template-string', () => {

    test('getSaludo debe de retornar "Hola Omar"', ()=>{

        const name = 'Fernando';
        const message = getSaludo( name );

        expect( message ).toBe(`Hola ${ name }`);

    });

});