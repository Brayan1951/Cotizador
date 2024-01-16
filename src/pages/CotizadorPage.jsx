import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { Find_by_Ruc } from '../db/findbyCliente'
import ListClientesPage from './ListClientesPage'
import useForm from '../hooks/useForm'
import { Find_by_Codigo } from '../db/findByProduct'
import ListProduct from '../components/product/listProduct'
import { temp_excel } from '../db/getExcel'

export default function CotizadorPage() {
  const { id_client } = useParams()
  const [Cliente, setCliente] = useState()

  const { codigo, changeForm } = useForm({ codigo: '' })
  const [products, setproducts] = useState([])


  const [listaProduct, setListaProduct] = useState([])


  useEffect(() => {
    const temp_cliente = Find_by_Ruc(id_client)
    setCliente(
      temp_cliente[0]
    )

  }, [id_client])

  const obtenerProduct = () => {
    const temp_product = Find_by_Codigo(codigo)
    setproducts(temp_product)


  }
// carrito
  const agregarListProduct = (product) => {
    const temp_product_carrito={...product,cantidad:1,precio:0}

    setListaProduct([...listaProduct, temp_product_carrito])

  }

  const setCantidadCarrito=(id,nuevaCantidad)=>{
    setListaProduct((prev)=>
    prev.map((produ,i)=>
      i==id?{...produ,cantidad:nuevaCantidad}:produ
    )
    
    )
  }
  const setPrecioCarrito=(id,nuevoPrecio)=>{
    setListaProduct((prev)=>
    prev.map((produ,i)=>
      i==id?{...produ,precio:nuevoPrecio}:produ
    )
    
    )
  }

  const obtenerExcel=()=>{
    temp_excel(listaProduct)
  }

  return (
    <>
      {
        Cliente ? (<h2>Cotizador al cliente {Cliente.nombre} - {Cliente.ruc}</h2>)
          : <div>No existe cliente</div>
      }
      <button onClick={obtenerExcel}>cotizar</button>
      <hr />

      <div>
        <div className="d-flex">

        <input className="form-control" name='codigo' value={codigo} type="text" placeholder="Agregar producto" onChange={changeForm} />
        <button onClick={obtenerProduct}>log</button>
        </div>



        <ListProduct products={products} agregarListProduct={agregarListProduct} />


        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Codigo</th>
              <th scope="col">Descripcion</th>
              <th scope="col">Cantidad</th>
              <th scope="col">Precio</th>
            </tr>
          </thead>
          <tbody>

            {
              listaProduct.map((producto,i) => {
                return (
                  <tr key={`tr-${i}`}>
                    <th  scope="row">{i+1}</th>
                    <td>{producto.codigo}</td>
                    <td>{producto.descripcion}</td>
                    <td>
                      <input type="number" value={producto.cantidad} onChange={(e)=>setCantidadCarrito(i,e.target.value)}/>
                    </td>
                    <td>
                      <input type="number" value={producto.precio} onChange={(e)=>setPrecioCarrito(i,e.target.value)}/>
                    </td>
                  </tr>

                )
              })
            }


          </tbody>
        </table>





      </div>


    </>
  )
}
