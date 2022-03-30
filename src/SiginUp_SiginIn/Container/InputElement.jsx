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
                autoComplete="off"
                className='reg_input' />
                {error && <span className='error'>{error}</span>}
        </div>
    )
}
export default InputElement
