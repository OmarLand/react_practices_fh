import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

  // const [categories, setCategories] = useState([ 'Dragon Ball','Death Note' ]);
  const [categories, setCategories] = useState([]);

  const onAddCategory = ( newCategory ) => {

    if ( categories.includes(newCategory) ) return;

    setCategories([ newCategory, ...categories]);
    // setCategories( cat => [ ...cat, "tekken" ] );

  }

  return (
    <>
        {/* Titulo de la explicación */}
        <h1>Gif Expert App</h1>


        {/* Input */}
        <AddCategory 
          // onSetCategories={ setCategories }
          onNewCategory = { event => onAddCategory(event) }  
        />


        {/* Listado de los Gif! */}
        <ol>
          { 
            categories.map( categorie => {
              return <li key={categorie}>{categorie}</li>;
            })
          }
        </ol>
            {/* Gif Item */}
    </>
  )
}
