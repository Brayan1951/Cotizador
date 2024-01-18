import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { Find_by_Ruc } from '../db/findbyCliente'
import useForm from '../hooks/useForm'
import { Find_by_Codigo } from '../db/findByProduct'
import ListProduct from '../components/product/listProduct'
import { temp_excel } from '../db/getExcel'

export default function CotizadorPage() {

  const ejecutivos = [
    {
      // id: 1,
      nombre: "YOVANA CONDORI",
      telefono: "996192014",
      correo: "example@gmail.com",
      area: "VCO"
    },
    {
      // id: 2,
      nombre: "RAQUEL CARRION",
      telefono: "996192014",
      correo: "example@gmail.com",
      area: "VCO"
    },
    {
      // id: 3,
      nombre: "NATALIA ROCA",
      telefono: "996192014",
      correo: "example@gmail.com",
      area: "VCO"
    },
    {
      // id: 4,
      nombre: "SANDRA DIAZ",
      telefono: "996192014",
      correo: "example@gmail.com",
      area: "VCO"
    },
    {
      // id: 5,
      nombre: "MAYRA",
      telefono: "996192014",
      correo: "example@gmail.com",
      area: "VCO"
    },
  ]


  const { id_client } = useParams()
  const [Cliente, setCliente] = useState()

  const { codigo, changeForm } = useForm({ codigo: '' })
  const [products, setproducts] = useState([])


  const [listaProduct, setListaProduct] = useState([])


  const [kam, setkam] = useState()


  useEffect(() => {


    const fetchData = async () => {
      try {
        const clienteAux = await Find_by_Ruc(id_client);
        setCliente(clienteAux);
      } catch (error) {
        console.error('Error al obtener datos del cliente:', error);
      }
    };

    fetchData();


  }, [id_client])

  const obtenerProduct = () => {
    Find_by_Codigo(codigo).then((val) => {
      // console.log(val);
      setproducts(val)
    })





  }
  // carrito
  const agregarListProduct = (product) => {
    const temp_product_carrito = { ...product, cantidad: 1, precio: 1 }

    setListaProduct([...listaProduct, temp_product_carrito])

  }

  const setCantidadCarrito = (id, nuevaCantidad) => {
    console.log(nuevaCantidad);
    if (nuevaCantidad < 0 || isNaN(nuevaCantidad)) nuevaCantidad = 1

    setListaProduct((prev) =>
      prev.map((produ, i) =>
        i == id ? { ...produ, cantidad: nuevaCantidad } : produ
      )

    )
  }
  const setPrecioCarrito = (id, nuevoPrecio) => {
    if (nuevoPrecio < 1) return
    const temp_precio = parseFloat(nuevoPrecio)
    setListaProduct((prev) =>
      prev.map((produ, i) =>
        i == id ? { ...produ, precio: temp_precio } : produ
      )

    )
  }

  const deleteCarrito = (id) => {
    setListaProduct((prev) =>
      prev.filter((product, i) =>
        i != id
      )
    )
  }

  const changeKam=(id)=>{
    setkam(ejecutivos[id])
    console.log(kam);
  }

  const obtenerExcel = () => {
    if (listaProduct.length >= 1) {


      temp_excel(kam,Cliente, listaProduct)
    }

  }

  return (
    <>
      <div className="row">
        <div className="col-8">
          {
            Cliente ? (

              <div>
                <div className="d-flex justify-content-around">

                  <h4>
                    Cotizando al cliente por
                  </h4>
                  <select onChange={(e)=>{changeKam(e.target.value)}} name="ejecutivo" className='p-2' id='1' >
                    {
                      ejecutivos ?
                      ejecutivos.map((val) => (
                        <option id={val.id} value={val.id-1} >{val.nombre}</option>
                        ))
                        :
                        <option key={1}>no hay</option>

                    }
                  </select>
                </div>
                <hr />
                <div className="d-flex justify-content-between">

                  <p>
                    {Cliente.nombre} - {Cliente.ruc}
                  </p>
                  <button className='btn btn-primary' onClick={obtenerExcel}>cotizar</button>
                </div>
              </div>
            )
              : <div>No existe cliente</div>
          }
          <hr />


          <div>






            <table className="table table-striped align-middle">
              <thead>
                <tr>
                  <th scope="col" colSpan={1}>#</th>
                  <th scope="col" colSpan={1} >Codigo</th>
                  <th scope="col" colSpan={7}>Descripcion</th>
                  <th scope="col" colSpan={1}>Cantidad</th>
                  <th scope="col" colSpan={1}>Precio</th>
                  <th scope="col" colSpan={1}>borrar</th>
                </tr>
              </thead>
              <tbody>

                {
                  listaProduct.map((producto, i) => {
                    return (
                      <tr key={`tr-${i}`}>
                        <th scope="col">{i + 1}</th>
                        <td>{producto.codigo}</td>
                        <td colSpan={7}>{producto.descripcion}</td>
                        <td colSpan={1}>
                          <input type="number" style={{ width: '90px', padding: '5px', boxSizing: 'border-box' }} value={producto.cantidad} onChange={(e) => setCantidadCarrito(i, e.target.value)} />
                        </td>
                        <td>
                          <input type="number" style={{ width: '90px', padding: '5px', boxSizing: 'border-box' }} value={producto.precio} onChange={(e) => setPrecioCarrito(i, e.target.value)} />
                        </td>
                        <td><button className='btn btn-danger' onClick={() => deleteCarrito(i)}>delete</button></td>
                      </tr>

                    )
                  })
                }


              </tbody>
            </table>





          </div>


        </div>
        <div className="col">
          <h5 className='mt-5'>Agregar productos</h5>
          <hr />
          <div className="d-flex mb-3">

            <input className="form-control" name='codigo' value={codigo} type="text" placeholder="Agregar producto" onChange={changeForm} />
            <button onClick={obtenerProduct}>buscar</button>

          </div>
          <ListProduct products={products} agregarListProduct={agregarListProduct} />
        </div>
      </div>





    </>
  )
}
