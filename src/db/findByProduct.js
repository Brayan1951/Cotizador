import axios from "axios";


const Productos=[
    {
        codigo:"1",
        codigo_sap:"A1",
        descripcion:"celular",
    },
    {
        codigo:"2",
        codigo_sap:"A2",
        descripcion:"teclado",
    },
    {
        codigo:"3",
        codigo_sap:"A3",
        descripcion:"mouse",
    },
    {
        codigo:"11",
        codigo_sap:"A11",
        descripcion:"laptop",
    },
    {
        codigo:"12",
        codigo_sap:"A12",
        descripcion:"audfino",
    },
    {
        codigo:"22",
        codigo_sap:"A22",
        descripcion:"scooter",
    },
   
]

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