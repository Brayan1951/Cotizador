import axios from "axios";

const baseref='https://cotizador-example-1.onrender.com'
// const baseref='http://127.0.0.1:8000'

const Find_by_Codigo=async(codigo)=>{

    if (codigo.length>3) {
            
        const temp={codigo}
        const response = await axios.post(`${baseref}/excel/obtener_productos`,temp)
        const {productos}=response.data
        console.log(productos);
        // const filter_name=clientes.filter((val)=>val["nombre"].startsWith(name))

        return productos
    }else{
        return []
    }

    const filter_codigo=Productos.filter((val)=>(val["codigo"].startsWith(codigo)))
    return filter_codigo
    
}


export {Find_by_Codigo}