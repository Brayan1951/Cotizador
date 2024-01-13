import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { Find_by_Ruc } from '../db/findbyCliente'
import ListClientesPage from './ListClientesPage'
import useForm from '../hooks/useForm'
import { Find_by_Codigo } from '../db/findByProduct'
import ListProduct from '../components/product/listProduct'

export default function CotizadorPage() {
  const { id_client } = useParams()
  const [Cliente, setCliente] = useState()
  
  const {codigo,changeForm}=useForm({codigo:''})
const [products, setproducts] = useState([])


  useEffect(() => {
    const temp_cliente = Find_by_Ruc(id_client)
    setCliente(
      temp_cliente[0]
    )

  }, [id_client])

  const obtenerProduct = () => {
    const temp_product=Find_by_Codigo(codigo)
    setproducts(temp_product)


  }


  return (
    <>
      {
        Cliente ? (<h2>Cotizador al cliente {Cliente.nombre} - {Cliente.ruc}</h2>)
          : <div>No existe cliente</div>
      }
      <button onClick={obtenerProduct}>log</button>
      <hr />

      <div>
      <input className="form-control" name='codigo' value={codigo} type="text" placeholder="Agregar producto"  onChange={changeForm}/>

  

      <ListProduct products={products} />


      </div>


    </>
  )
}
