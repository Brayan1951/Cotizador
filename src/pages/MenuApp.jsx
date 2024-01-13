import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function MenuApp() {
  return (
    <div className='container'>
        
        <h1 className='center m-5'>
    

        MenuApp
        </h1>
        <Link to={"/"}>Home</Link>
        <hr />
        <Outlet/>


    </div>
  )
}
