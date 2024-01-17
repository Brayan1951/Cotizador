import axios from "axios";

const clientes=[
    {
        codigo:"C2076936661",
        ruc:"2076936661",
        nombre:"Entel",
        "linea de credito":100
    },
    {
        codigo:"C2076936662",
        ruc:"2076936662",
        nombre:"adecco sales",
        "linea de credito":1020
    },
    {
        codigo:"C2076936664",
        ruc:"2076936664",
        nombre:"adecco logistic",
        "linea de credito":1020
    },
    {
        codigo:"C2076936663",
        ruc:"2076936663",
        nombre:"alicorp",
        "linea de credito":1200
    },
]




const baseref='https://cotizador-example-1.onrender.com'
// const baseref='http://127.0.0.1:8000'

    const Find_by_Name=async(codigo='')=>{
        if (codigo.length>2) {
            
            const temp={codigo}
            const response = await axios.post(`${baseref}/excel/obtener_clientes`,temp)
            const {clientes}=response.data
            console.log(clientes);
            // const filter_name=clientes.filter((val)=>val["nombre"].startsWith(name))
    
            return clientes
        }else{
            return []
        }
        
    }
    const Find_by_Ruc=async(ruc)=>{
        try {
            var temp_cliente
            
            await axios.get(`${baseref}/excel/obtener_clientes/${ruc}`).then(({data})=>{
                const {cliente}=data
                temp_cliente=cliente[0]
            })
            return temp_cliente
        } catch (error) {
            
            console.error('Error al obtener datos del cliente:', error);
        }
      

    }

    






    export {Find_by_Name,Find_by_Ruc}

