import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

  // const [categories, setCategories] = useState([ 'Dragon Ball','Death Note' ]);
  const [categories, setCategories] = useState([]);

  const onAddCategory = ( newCategory ) => {

    if ( categories.includes(newCategory) ) return;
    
    setCategories([ newCategory, ...categories]);
  
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
            categories.map( category => {
              return(
                <GifGrid 
                  key ={ category }
                  category = { category }
                />
              );
            })
          }
        </ol>
            {/* Gif Item */}
    </>
  )
}
