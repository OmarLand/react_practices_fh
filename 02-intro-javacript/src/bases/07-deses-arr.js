//TODO: Repasar desestructuracion

// Desestructuración de arreglos
const personajes = ["Goku","Vegeta","Krilin","Majin Boo","Piccolo"];

// console.log( personajes );

const [ test ] = personajes;

// console.log( test );

const retornaArreglo = () => {
    return ['ABC', 123];
}

// Forma de mostrar datos de un arreglo
// const arr = retornaArreglo();
// console.log( arr );

// Desestructurando el arreglo de la función:
const [letras, numeros] = retornaArreglo();
console.log( letras, numeros );

//
// Tarea
// 1. El Primer valor del arreglo se llamara nombre
// 2. EL segundo valor del arreglo Se llamará setNombre
//
const useState = ( valor ) => {
    return [valor, () => { console.log('Hola Mundo') } ];
}

const  [nombre, setNombre] = useState('Goku');

console.log( nombre );
setNombre();
// arr[1]();