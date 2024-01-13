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
        codigo_sap:"mouse",
        descripcion:"celular",
    },
   
]

const Find_by_Codigo=(codigo)=>{

    const filter_codigo=Productos.filter((val)=>val["codigo"].startsWith(codigo))

    return filter_codigo
    
}


