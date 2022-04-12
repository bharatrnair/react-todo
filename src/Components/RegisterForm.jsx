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
import Button from './Button'

const RegisterForm = () => {
    const [formData, setFormData] = useState({
       name: "",
       employerName:"",
       email:"",
       phone:"",
       state:"",
       city:"",
       postalCode:"",
       address:"",
    });

    const [FormDataError, setFormDataError] = useState({
        name: "",
        employerName:"",
        email:"",
        phone:"",
        state:"",
        city:"",
        postalCode:"",
        address:"",
     });

    const[stateList, setStateList] = useState([]);
    const[cityList, setCityList] = useState([]);
    const {name, employerName, email, phone, state, city, postalCode, address}=formData;
    
    const onChange = (key,value) => {
        setFormData({
            ...formData,
            [key]: value

        });
    } 

    const onChangeError = (key,value) => {
        setFormDataError(prev=>({
            ...prev,
            [key]: value
        }));
      }

    useEffect(() => {
      fetch("http://192.168.1.48:5000/utils/state-list")
      .then(res => res.json())
      .then(response => {
         setStateList(response.data.map(({name})=>name));
      })
    }, [])

    useEffect(() => {
      if(state){
      fetch(`http://192.168.1.48:5000/utils/cites-list/${state}`)
      .then(res => res.json())
      .then(response => {
          setCityList(response.data.map(({name})=>name));
      })
    }
  },  [state])

  const formSubmit = async(e)=>{
    e.preventDefault();

    try{
      const result = await fetch("http://192.168.1.48:5000/organization/register",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(formData)
      }
      ).then(res => res.json());
      if(!result.status){
        result.data.forEach(({path,message})=>{
          onChangeError(path,message);
      })
    }
    }catch(err){
      console.log(err);
    }
  }
return (
    <form onSubmit={formSubmit}>
        <InputField label={"Organization Name"} 
        icon={OrgIcon}
        info="Organization Name as per Records"
        error={FormDataError.name}
        value={name}
        onChange={(value)=>onChange("name",value)}
        />
        <InputField label={"Employer Name"} 
        icon={EmpIcon}
         info="Employer Name as per Records"
        error={FormDataError.employerName}
        value={employerName}
        onChange={(value)=>onChange("employerName",value)}
        />
        <InputField label={"Email"} 
        icon={EmailIcon}
        info="Email as per Records"
        error= {FormDataError.email}
        value={email}
        onChange={(value)=>onChange("email",value)}
        />
         <InputField label={"Phone Number"} 
        icon={PhoneIcon}
        info="Phone Number as per Records"
        error={FormDataError.phone}
        value={phone}
        onChange={(value)=>onChange("phone",value)}
        />
        <SelectBox 
        label={"State"} 
        icon={StateIcon}
        error={FormDataError.state}
        options={stateList}
        value={state}
        onChange={(value)=>onChange("state",value)}
        />
        <SelectBox
        label={"City"} 
        icon={CityIcon}
        options={cityList}
        error={FormDataError.city}
        value={city}
        onChange={(value)=>onChange("city",value)}
        />
          <InputField label={"PinCode"} 
        icon={PinCodeIcon}
        info="PinCode as per Records"
        error={FormDataError.postalCode}
        value={postalCode}
        onChange={(value)=>onChange("postalCode",value)}
        />
          <InputField label={"Address"} 
        type="textarea"
        icon={addressIcon}
        info="Address as per Records"
        error={FormDataError.address}
        value={address}
        onChange={(value)=>onChange("address",value)}
        />
 
 <Button type ="submit" label="Register"/>

    </form>

  )
}

export default RegisterForm