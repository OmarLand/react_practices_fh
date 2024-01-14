import { getHeroeById, getHeroesByOwner } from '../../base-pruebas/08-imp-exp';

describe('Pruebas en 08-imp-exp.test', () => { 
    
    test(' getHeroeById debe retornar un heroe por ID ', () => {

        const id = 1;
        const hero = getHeroeById( id );
        console.log( hero );

        expect( hero ).toEqual( { id: 1, name: 'Batman', owner: 'DC' } );

    });
   
    test(' getHeroeById debe retornar undefined si no existe el heroe ', () => {

        const id = 100;
        const hero = getHeroeById( id );
        console.log( hero );

        expect( hero ).toBeFalsy();

    });

    // Tarea:
    // Debe de retornar un arreglo con los héroes de DC
    // Length === 3
    // toEqual al arreglo filtrado

    // debe de retornar un arreglo con los héroes de Marvel
    // length === 2

    test(' getHeroesByOwner Debe de retornar un arreglo con los héroes de DC', () => { 
        const own = 'DC';
        const hero = getHeroesByOwner( own );
        console.log( hero );

        expect( hero.length ).toBe( 3 );
        expect( hero ).toEqual( [
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
        ] );
        
     })

     test(' getHeroesByOwner Debe de retornar un arreglo con los héroes de Marvel', () => { 
        const own = 'Marvel';
        const hero = getHeroesByOwner( own );
        console.log( hero );

        expect( hero.length ).toBe( 2 );
        
     })

 
});