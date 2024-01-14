

const persona = {
    nombre   : 'Omar',
    apellido : 'Landaeta',
    edad     : 34,
    direccion: {
        provincia : 'Maturin',
        estado    : 'Monagas',
        pais      : 'VEN',
        ZP        : 6201,
    }
};


console.log( 'Ciudad Procedencia:', persona.direccion.provincia );
console.log( 'Estado Procedencia:', persona.direccion.estado );
console.log( 'País Procedencia:', persona.direccion.pais );
console.log( 'Codigo Postal Procedencia:', persona.direccion.ZP );
