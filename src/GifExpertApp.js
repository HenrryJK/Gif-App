import React, { useState } from 'react'

export const GifExpertApp = () => {
 //    const categorias = ['Empleado' , 'Administrador' , 'Mayordomo']
    const [categorias, setCategories] = useState(['Empleado' , 'Administrador' , 'Mayordomo']);
    const handleAdd = () => {
       // setCategories([...categorias , 'Programador']);
       setCategories(cats => [...cats , 'Programador']);
    }
    
    return (
        <>
            <h2>GifExpertApp</h2>
            <hr />
            <button onClick = {handleAdd}>Agregar Ocupattion</button>
            <ul>
                {
                    categorias.map ( category  => {
                        return <li key={category}>{category} </li>
                    })
                }
            </ul>

        </>
        
    )
}
