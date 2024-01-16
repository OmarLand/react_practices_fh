import { useState } from 'react'


export const AddCategory = ( {onSetCategories} ) => {

    const [inputValue, setInputValue] = useState("")

    const onInputChange = ({target}) => {
        // console.log( ">>> ", event.target.value );
        setInputValue( target.value ); // Recojo el valor ingresado por teclado
    }

    const onSubmit = ( event ) => {
        event.preventDefault(); // Pausar resultado en consola

        if( inputValue.trim().length <= 1 ) return; // Evita meter datos indeseados

        onSetCategories( categories =>[ inputValue, ...categories ] );
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
