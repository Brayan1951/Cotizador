import React from 'react'

export default function ListProduct({ products = [] ,agregarListProduct}) {

  const agregar=(codigo)=>{
    agregarListProduct(codigo)
  }


  return (
    <div >

      {
        products.length > 0 ?
          (
            <details>
              <summary>Productos</summary>

              <ul className="list-group">

                {

                  products.map((product,i) => { 
                     
                   return ( 
                   <div key={i} className='d-flex justify-content-between mt-2 '>

                   <li key={`li-${i}`} className="list-group-item">
                      {product.codigo} - {product.descripcion}
                    </li> 
                    <button key={`b-${i}`} onClick={()=>agregar(product)}>agregar</button>
                   </div>
                    )
                  })


                }

              </ul>
            </details>


          )
          : <></>

      }








    </div>
  )
}
