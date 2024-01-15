import React, { useState } from 'react'

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([ 'Dragon Ball','Death Note' ])

  // console.log( categories );

  const onAddCategory = () => {
    setCategories([...categories, "tekken"]);
    // setCategories( cat => [ ...cat, "tekken" ] );

  }

  return (
    <>
        {/* Titulo de la explicación */}
        <h1>Gif Expert App</h1>


        {/* Input */}


        {/* Listado de los Gif! */}

        <button onClick={onAddCategory}>Agregar</button>
        <ol>
          { categories.map( categorie => {
            return <li key={categorie}>{categorie}</li>;
          })}
          {/* <li>abc</li> */}
        </ol>
            {/* Gif Item */}
    </>
  )
}
