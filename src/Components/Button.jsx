import React from 'react'

const Button = ({label,type="button"}) => {
  return (
    <div className='button-container'>
        <button type={type}>{label}</button>
    </div>
  )
}
export default Button