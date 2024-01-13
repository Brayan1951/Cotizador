import React, { useState } from 'react'

export default function useForm(initState) {


    const [formData, setFormData] = useState(initState)

    const resetForm=()=>{
    setFormData({...initState})
    }

    const changeForm=(e)=>{
        setFormData(prev=>({
            ...prev,
            [e.target.name]:e.target.value
        })
        )

    }

    return {...formData,changeForm,resetForm}
}
