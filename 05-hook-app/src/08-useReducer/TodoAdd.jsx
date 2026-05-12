
import React from 'react';
import { useForm } from '../hooks/useForm';


export const TodoAdd = ( { onNewTodo } ) => {

    const {description, onInputChange, handleReset} = useForm({
        description : ''
    });

    const onFormSubmit = ( event ) => {
        event.preventDefault();
        if ( description.length <= 1 ) return;

        const newTodo = {
            id   : new Date().getTime(),
            done : false,
            description : description
        }

        onNewTodo( newTodo );
        handleReset();

    }

    return (
        <>
            <form onSubmit= { onFormSubmit }>
                <input
                    type="text" 
                    placeholder='¿Que hacemos?' 
                    name='description' 
                    className='form-control'
                    value = { description }
                    onChange={ onInputChange }
                />

                <button
                    type='submit'
                    className='btn btn-outline-primary mt-1'
                >
                    Agregar
                </button>
            </form>
        </>
    )
}
