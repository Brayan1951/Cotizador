import { CardComponent } from './cardComponent'

export const ListCardsComponent = ({ clientes=[] }) => {
    // console.log(clientes);
    if (clientes) {
        
    return (<div className='m-5'>
        {
            clientes.map((cliente, i) => {

                return <CardComponent key={i} cliente={cliente} />
            }
            )
        }


    </div>)
    }
    else return <h2>No hay nada</h2>
}