import { memo } from 'react'

export const Small = memo( ({value})  => {

    console.log("Me volví a dibujar :( ");
    
  return (
    <>
        <small>{value}</small>
    </>
  )
})
