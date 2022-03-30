import React from 'react'
import '../../styles/userform.css';

const InputElement = ({ name, type, placeholder, value, onChange, error }) => {
    return (
        <div className='input__element'>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className='reg_input' />
                {error && <span className='error'>{error}</span>}
        </div>
    )
}
export default InputElement
