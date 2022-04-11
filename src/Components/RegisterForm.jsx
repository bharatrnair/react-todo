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
import { useState } from 'react'

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
    const {orgName, employerName, email, phone, state, city, pinCode, address}=formData;
    
    const onChange = (key,value) => {
        setFormData({
            ...formData,
            [key]: value

        });
    } 
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
        onChange={(value)=>onChange("email",value)}
        />
         <InputField label={"Phone Number"} 
        icon={PhoneIcon}
        info="Phone Number as per Records"
        error=""
        onChange={(value)=>onChange("phone",value)}
        />
        <InputField label={"State"} 
        icon={StateIcon}
        info="State as per Records"
        error=""
        onChange={(value)=>onChange("state",value)}
        />
        <InputField label={"City"} 
        icon={CityIcon}
        info="City as per Records"
        error=""
        onChange={(value)=>onChange("city",value)}
        />
          <InputField label={"PinCode"} 
        icon={PinCodeIcon}
        info="PinCode as per Records"
        error=""
        onChange={(value)=>onChange("pinCode",value)}
        />
          <InputField label={"Address"} 
        icon={addressIcon}
        info="Address as per Records"
        error=""
        onChange={(value)=>onChange("address",value)}
        />


    </form>

  )
}

export default RegisterForm