import React , {useState} from 'react'

export const AddCategory = () => {
    const [imputValue, setImputValue] = useState('Hola Mundo');
    const handleImputChange = (e) => {
        setImputValue(e.target.value);

    }
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Submit Hecho !! ')
    }
    return (
        <form onSubmit = {handleSubmit}>
    
        <input
        type="text"
        value= {imputValue}
        onChange = {handleImputChange}
        />
        </form>
    )
}
