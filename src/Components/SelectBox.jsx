import React from "react"

const SelectBox = ({ 
    label,
    icon=null,
    error=null,
    info=null,
    value,
    options,
    onChange
    }) => {
      return (
        <div className='input-field-container'>
            <div className={`input-field`}>
              <select value={value} onChange={(e)=>onChange(e.target.value,e)}>
                <option value=""></option>
                {options.map((option,index)=>{
                  return<option key={index} value={option}>{option}</option>
                })}
              </select>
                <label className={value?"filled-label":""}>{label}</label>
                { icon && <div className='input-field-icon' style={{
                    backgroundImage: `url(${icon})`,
                }}></div>}
                {info && <div className="input-field-info-icon" title={info}>
                    </div>}
            </div>
                
            
        {error && <div className='error-text'>
            {error}
            </div>}
        </div>
      )
    }
             
    
    export default SelectBox