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






    const Find_by_Name=(name)=>{

        const filter_name=clientes.filter((val)=>val["nombre"].startsWith(name))

        return filter_name
        
    }
    const Find_by_Ruc=(ruc)=>{
        const filter_ruc=clientes.filter((val)=>val.ruc===ruc)
    
        return {...filter_ruc}

    }




    export {Find_by_Name,Find_by_Ruc}

