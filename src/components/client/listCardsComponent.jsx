import {CardComponent}from './cardComponent'

export const ListCardsComponent=({clientes})=>{
    console.log(clientes);

return <div className='m-5'>
{
clientes.map((cliente,i)=>{

    return <CardComponent key={i} cliente={cliente}/>
}
)
}


</div>

}