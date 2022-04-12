import React from 'react'
import InputField from './InputField'
import OrgIcon from '../Assets/svg/org.svg'
import EmpIcon from '../Assets/svg/emp.svg'
import EmailIcon from  '../Assets/svg/email.svg'
import PhoneIcon from '../Assets/svg/phone.svg'
import StateIcon from '../Assets/svg/state.svg'
import CityIcon from  '../Assets/svg/city.svg'
import PinCodeIcon from '../Assets/svg/pincode.svg'
import addressIcon from'../Assets/svg/address.svg'
import { useState, useEffect } from 'react'
import SelectBox from './SelectBox'

const RegisterForm = () => {
    const [formData, setFormData] = useState({
       orgName: "",
       employerName:"",
       email:"",
       phone:"",
       state:"",
       city:"",
       pinCode:"",
       address:"",
    });
    const[stateList, setStateList] = useState([]);
    const {orgName, employerName, email, phone, state, city, pinCode, address}=formData;
    
    const onChange = (key,value) => {
        setFormData({
            ...formData,
            [key]: value

        });
    } 

    useEffect(() => {
      fetch("http://192.168.1.48:5000/utils/state-list")
      .then(res => res.json())
      .then(response => {
         setStateList(response.data.map(({name})=>name));
      })
    }, [])
return (
    <form>
        <InputField label={"Organization Name"} 
        icon={OrgIcon}
        info="Organization Name as per Records"
        error=""
        value={orgName}
        onChange={(value)=>onChange("orgName",value)}
        />
        <InputField label={"Employer Name"} 
        icon={EmpIcon}
         info="Employer Name as per Records"
        error=""
        value={employerName}
        onChange={(value)=>onChange("employerName",value)}
        />
        <InputField label={"Email"} 
        icon={EmailIcon}
        info="Email as per Records"
        error=""
        value={email}
        onChange={(value)=>onChange("email",value)}
        />
         <InputField label={"Phone Number"} 
        icon={PhoneIcon}
        info="Phone Number as per Records"
        error=""
        value={phone}
        onChange={(value)=>onChange("phone",value)}
        />
        <SelectBox 
        label={"State"} 
        icon={StateIcon}
        error=""
        options={stateList}
        value={state}
        onChange={(value)=>onChange("state",value)}
        />
        <InputField label={"City"} 
        icon={CityIcon}
        info="City as per Records"
        error=""
        value={city}
        onChange={(value)=>onChange("city",value)}
        />
          <InputField label={"PinCode"} 
        icon={PinCodeIcon}
        info="PinCode as per Records"
        error=""
        value={pinCode}
        onChange={(value)=>onChange("pinCode",value)}
        />
          <InputField label={"Address"} 
        type="textarea"
        icon={addressIcon}
        info="Address as per Records"
        error=""
        value={address}
        onChange={(value)=>onChange("address",value)}
        />


    </form>

  )
}

export default RegisterForm