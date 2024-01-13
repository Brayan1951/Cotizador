import React from 'react'

export default function ListProduct({ products = [] }) {

  console.log(products);

  return (
    <div >

      {
        products.length > 0 ?
          (
            <details>
              <summary>Productos</summary>

              <ul className="list-group">

                {

                  products.map((product,i) => { return <li key={i} className="list-group-item">{product.codigo} - {product.descripcion}</li> })


                }

              </ul>
            </details>


          )
          : <></>

      }








    </div>
  )
}
