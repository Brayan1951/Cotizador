import React from 'react'
import { Link } from 'react-router-dom'

export const  CardComponent=({cliente}) =>{

    const {ruc,nombre}=cliente
    return (
    <div>

        <h3>
            {ruc}-{nombre}
        </h3>
        <Link to={`cotizador/${ruc}`}>Cotizar</Link>
        <hr />


    </div>
  )
}
