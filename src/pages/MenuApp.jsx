import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function MenuApp() {
  return (
    <div className='container'>
        
        <Link to={"./"}>Home</Link>
        <hr />
        <Outlet/>


    </div>
  )
}
