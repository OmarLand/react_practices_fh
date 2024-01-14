import { getHeroesById } from './08-imp-exp'

// Manejo de promesas

// const promesa = new Promise((resolve, reject) => {

//     setTimeout(() => {
//         //Tarea
//         // Importar el getHeroeById

//         const heroe = getHeroesById(2);
//         console.log( heroe );
//         resolve ( p1 );
//         // reject('No se pudo encontrar el elemento Heroe')

//     }, 2000);

// });

// promesa.then( ()=>{
//     console.log("Then de la promesa!!");
// })

// .catch( err => console.warn( err ) );

const getHeroeByIdAsync = ( id ) => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            //Tarea
            // Importar el getHeroeById
    
            const heroe = getHeroesById(id);

            if( heroe ) {
                resolve ( heroe );
            } else {
                reject('No existe ese heroe, por favor verifica...');
            }

            // reject('No se pudo encontrar el elemento Heroe')
    
        }, 2000);
    
    });

}

getHeroeByIdAsync(4)
    .then( console.log )
    // .then( heroe => console.log('Heroe', heroe) )
    // .catch( err => console.warn( err ))
    .catch( console.warn)