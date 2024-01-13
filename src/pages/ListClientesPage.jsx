import React, { useState } from 'react'
import useForm from '../hooks/useForm'
import { Find_by_Name } from '../db/findbyCliente'
import { ListCardsComponent } from '../components/client/listCardsComponent'

export default function ListClientesPage() {

  const {name,changeForm,resetForm}=useForm({name:""})
  const [clientes, setclientes] = useState([])


  const buscar=(e)=>{
    e.preventDefault()

    const temp=Find_by_Name(name)

    setclientes(temp)


}



  return (
    <div>
    <form action="" className='m-5'>
    <input type="text" name='name' className='' value={name} onChange={changeForm} />
    <button className='btn ' onClick={buscar}>buscar</button>
        </form>

        <ListCardsComponent  clientes={clientes}/>

    </div>
  )
}
