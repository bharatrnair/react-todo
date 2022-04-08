import React from 'react'
import svg1 from './org1.jpg'

const Input = ({placeholder,type="text"}) => {
  return (
    <div className='inputBox'>
        <input type={type} placeholder={placeholder}  className="loginBox"/>
        <img src={svg1} alt=""/>
    </div>
  )
}

export default Input