import React , {useState} from 'react'
import PropTypes from "prop-types";
export const AddCategory = ({setCategories}) => {
    const [imputValue, setImputValue] = useState('');
    const handleImputChange = (e) => {
        setImputValue(e.target.value);

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (imputValue.trim().length > 2) {
             setCategories(cats => [...cats , imputValue]);
             setImputValue('');
        }
       
      //  console.log('Submit Hecho !! ')
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

AddCategory.propTypes={
    setCategories:PropTypes.func.isRequired
}
