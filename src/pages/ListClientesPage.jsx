import React, { useState } from 'react'
import useForm from '../hooks/useForm'
import { Find_by_Name } from '../db/findbyCliente'
import { ListCardsComponent } from '../components/client/listCardsComponent'

export default function ListClientesPage() {

  const {name,changeForm,resetForm}=useForm({name:""})
  const [clientes, setclientes] = useState([])


  const buscar=async(e)=>{
    e.preventDefault()

    const temp=await Find_by_Name(name)
    // console.log(temp);

    setclientes(temp)


}



  return (
    <div>
    <form action="" className='m-5'>
    <input type="text" name='name' className='' value={name} onChange={changeForm} />
    <button className='btn ' onClick={buscar}>buscar</button>
        </form>
        {
          (clientes.length>0)? (
            
            <ListCardsComponent  clientes={clientes}/>
          )
          :(<h1>no hay nada</h1>)
        }

    </div>
  )
}
