import React from 'react'

const InputField = ({type="text",label,icon=null,error=null}) => {
  return (
    <div className='input-field-container'>
        <div className="input-field">
            <input type={type} />
            <label>{label}</label>
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