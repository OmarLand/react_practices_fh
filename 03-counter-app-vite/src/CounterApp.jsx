
import { useState } from 'react';
import PropTypes from 'prop-types';



export const CounterApp = ( {value} ) => {
    
    const [ counter, setCounter ] = useState( value )
    
    // Gestiono la suma
    const handleAdd = (event) => { 
        // console.log( event ); 
        setCounter( counter + 1 )
    }
    
    // Gestiono la Resta
    const handleSustract = (event) => { 
        setCounter( counter - 1 )
    }

    // Gestiono el Reset
    const handleReset = (event) => {  
        setCounter( value )
    }

    return(
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>

            <button onClick={ handleAdd }> +1 </button>
            <button onClick={ handleSustract }> -1 </button>
            <button aria-label='btn-reset' onClick={ handleReset }> Reset </button>
        </>
    )

}


// Controlamos el tipo de datos que solicitamos en el componente
CounterApp.propTypes = {
    value    : PropTypes.number.isRequired
}

// Controlamos que exista un valor por defecto en los props que metemos al componente
CounterApp.defaultProps = {
    value : 0,
}