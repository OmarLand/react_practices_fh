


export function getSaludo(nombre) {
    return 'Hola ' + nombre;
}

const nombre = 'Omar'

console.log( `Este es un texto: ${ getSaludo( nombre ) }  ` );