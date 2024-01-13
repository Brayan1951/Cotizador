import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import ListClientesPage from '../pages/ListClientesPage'
import CotizadorPage from '../pages/CotizadorPage'
import MenuApp from '../pages/MenuApp'

export default function routerApp() {

     const router=createBrowserRouter([
        {
            path:'/',element:<MenuApp/>,
        children:[

            {path:'/',element:<ListClientesPage/>}
            ,{path:'cotizador/:id_client',element:<CotizadorPage/>}
     ]
    },
     ])

     return router
}
