import PropTypes from 'prop-types'

// Manejo de los PROPS en los componentes
export const FirstApp = ( { title , subtitle, name } ) => {
    // console.log( props )
    return (
        <>
            {/* <h1> { title } </h1> */}
            <h1 data-testid='test-title'> { title } </h1>
            <p> { subtitle } </p>
            {/* <p> { subtitle } </p> */}
            <p> { name } </p>
        </>
    )
}

// Controlamos el tipo de datos que solicitamos en el componente
FirstApp.propTypes = {
    title    : PropTypes.string.isRequired,
    subtitle : PropTypes.string.isRequired,
}

// Controlamos que exista un valor por defecto en los props que metemos al componente
FirstApp.defaultProps = {
    title    : 'No hay un titulo.',
    subtitle : 'No hay un subtitulo',
    name     : 'Omar Landaeta' 
}