import React from 'react'

const InputField = () => {
  return (
    <div className='input-field-container'>
        <div className="input-field">
            <label>{label}</label>
            <input type={type} />
            { icon && <div className='input-field-icon' style={{
                backgroundImage: `url(${icon})`,
            }}></div>}
        </div>
            
        
    {error && <div className='error-text'>
        {error}
        </div>}
    </div>
  )
}

export default InputField