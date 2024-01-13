import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { Find_by_Ruc } from '../db/findbyCliente'

export default function CotizadorPage({ match }) {
  const { id_client } = useParams()
  const [Cliente, setCliente] = useState()
  useEffect(() => {
    const temp_cliente = Find_by_Ruc(id_client)
    setCliente(
      temp_cliente[0]
    )

  }, [id_client])

  const temp = () => {

    console.log(Cliente);
  }


  return (
    <>
      {
        Cliente ? (<h2>Cotizador al cliente {Cliente.nombre} - {Cliente.ruc}</h2>)
          : <div>No existe cliente</div>
      }
      <button onClick={temp}>log</button>
      <hr />

      <div>
      <input class="form-control" type="text" placeholder="Agregar producto" aria-label="default input example"/>
        <ul className="list-group">
          <li className="list-group-item">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
          <li className="list-group-item">A fourth item</li>
          <li className="list-group-item">And a fifth one</li>
        </ul>


      </div>


    </>
  )
}
