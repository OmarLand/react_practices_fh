
// Desestructuración
// Asisnación Desestructurante

const persona = {
    nombre : 'Omar',
    edad   : 34,
    clave  : 'Playman',
    // rango  : 'Coronel'
} 

// const { nombre, edad, clave } = persona;

// console.log( nombre );
// console.log( edad );
// console.log( clave );

const useContext = ({ nombre, edad, clave, rango='General' }) => {

    // console.log( nombre, edad, clave, rango );

    return {
        nombreClave : clave,
        anios       : edad,

    }

}

const { nombreClave, anios } = useContext( persona );

console.log( nombreClave, anios );