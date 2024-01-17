import React from 'react'
import { Link } from 'react-router-dom'

export const  CardComponent=({cliente}) =>{

    const {ruc,nombre}=cliente
    return (
    <div>

        <h4>
            {ruc}-{nombre}
        </h4>
        <Link to={`cotizador/${ruc}`}>Cotizar</Link>
        <hr />


    </div>
  )
}
