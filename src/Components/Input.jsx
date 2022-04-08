import React from 'react'

const Input = ({placeholder,type="text"}) => {
  return (
    <div className='inputBox'>
        <input type={type} placeholder={placeholder}  className="loginBox"/>
    </div>
  )
}

export default Input