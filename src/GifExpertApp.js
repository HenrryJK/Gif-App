import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
 //    const categorias = ['Empleado' , 'Administrador' , 'Mayordomo'];
    const [categorias, setCategories] = useState(['Empleado']);
   /*const handleAdd = () => {
       // setCategories([...categorias , 'Programador']);
       setCategories(cats => [...cats , 'Programador']);
    }*/
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr />
            <ul>
                {
                    categorias.map ( category  => (
                        <GifGrid
                        key={category}
                        category={category  }
                        />
                    ))
                }
            </ul>

        </>
        
    )
}
