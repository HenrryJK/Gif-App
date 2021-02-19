import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {
 //    const categorias = ['Empleado' , 'Administrador' , 'Mayordomo'];
    const [categorias, setCategories] = useState(['Empleado' , 'Administrador' , 'Mayordomo']);
   /*const handleAdd = () => {
       // setCategories([...categorias , 'Programador']);
       setCategories(cats => [...cats , 'Programador']);
    }*/
    
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory/>
            <hr />
         

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
