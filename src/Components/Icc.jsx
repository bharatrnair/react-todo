import React from 'react'
import Input from './Input'
import image from './../icc.jpg'


const Icc = () => {
  return (
    <div className='mainBody'>
    <div className="mainSection">

        <div className="leftSection">
            <div className="svgorg">
            < Input placeholder="Organization Name" />
            </div>
            < Input placeholder=" Email" />
            < Input placeholder="Phone Number" type='number'/>
            < Input placeholder="Address" />
            < Input placeholder="State" />
            < Input placeholder="City" />
            < Input placeholder="PinCode" type='number' />
        <div className="buttonClass">
            <button>
                Register
            </button>
        </div>
        </div>
            
        <div className="rightSection">
            <img src={image}alt="" />

         </div>


    </div>

  </div>
  )}


export default Icc