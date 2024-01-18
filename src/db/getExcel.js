import axios from "axios";

const baseref='https://cotizador-example-1.onrender.com'
// const baseref='http://127.0.0.1:8000'
export const temp_excel=async(kam,cliente,producto)=>{
    const datos={
        ejecutivo:{...kam},
        cliente:{...cliente,direccion:"av brasilon"},
        productos:producto
    }


    console.log(datos);
    const response = await axios.post(`${baseref}/excel/generar_excel`,datos,{
        responseType: 'arraybuffer',  // Para manejar archivos binarios (Excel)
    })
    const blob = new Blob([response.data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'archivo.xlsx';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);

    
}

