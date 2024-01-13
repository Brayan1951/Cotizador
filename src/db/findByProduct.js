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

const Find_by_Codigo=(codigo)=>{

    const filter_codigo=Productos.filter((val)=>(val["codigo"].startsWith(codigo)))
    console.log(filter_codigo);
    return filter_codigo
    
}


export {Find_by_Codigo}