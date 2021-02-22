import React from 'react'
//// (props) al usarlo lo estoy usando como una propiedad indpendiente
export const GifGridItem = ({id , title , url}) => {
    console.log({id , title , url});
    return (
        <div className="card">
        {/*img.title*/} 
        <img src = {url} alt= {title}/>
        <p>{title}</p>
        </div>
    )
}
