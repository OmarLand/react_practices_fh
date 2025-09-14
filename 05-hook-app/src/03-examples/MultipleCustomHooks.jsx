import React from 'react'
import { useFetch } from '../hooks/useFetch'

export const MultipleCustomHooks = () => {

    const { data, hasError, isLoading } = useFetch('https://pokeapi.co/api/v2/pokemon/1');

    return (
        <>
            <h1>Información de pokemon</h1>
            <hr />

            { isLoading && <p> Cargando... </p> }

            <pre>{ data?.name }</pre>
        </>
    )
}
