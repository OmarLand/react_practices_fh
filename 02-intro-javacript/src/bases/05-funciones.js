// Funciones en JS

// Funcion normal
const saludar = function( nombre ){
    return `Hola, ${ nombre }`;
}

// Funcion flechas
const saludar2 = ( nombre ) => {
    return `Hola ${ nombre }`;
}

// Funcion flechas simplificada
const saludar3 = ( nombre ) => `Hola ${ nombre }`;
const saludar4 = () => `Hola que tal!!!`;

console.log( saludar('Omar') );
console.log( saludar2('Goku') );
console.log( saludar3('Majin Boo!') );
console.log( saludar4() );

const getUser = () => {
    return{
        uuid     : 'ABC123',
        username : 'OmarjLand'
    };
}

const user = getUser();
console.log( user );

// Tarea:
// 1. Transformar a funcion de flecha        ✔
// 2. Tiene que retornar un objeto implicito ✔
// 3. Pruebas                                ✔

const  getUsuarioActivo = ( nombre ) => ({
    uuid   : 'ABC123',
    nombre : nombre
})


const usuarioActivo = getUsuarioActivo('Omar');
console.log( usuarioActivo );