import { useState } from 'react'


export const AddCategory = ( {onNewCategory} ) => {

    const [inputValue, setInputValue] = useState("")

    const onInputChange = ({target}) => {
        // console.log( ">>> ", event.target.value );
        setInputValue( target.value ); // Recojo el valor ingresado por teclado
    }

    const onSubmit = ( event ) => {
        event.preventDefault(); // Pausar resultado en consola
        if( inputValue.trim().length <= 1 ) return; // Evita meter datos no deseados
        // onSetCategories( categories => [ inputValue, ...categories ] );
        onNewCategory( inputValue.trim() )
        setInputValue('');
    }


    return (
        <form onSubmit={ onSubmit }>
            <input  
                type="text" 
                placeholder='Buscar gifs'
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    )
}
