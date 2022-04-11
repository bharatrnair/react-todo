import React from 'react'
import InputField from './InputField'
import OrgIcon from '../Assets/svg/org.svg'

const RegisterForm = () => {
  return (
    <form>
        <InputField label={"Organization Name"} 
        icon={OrgIcon}
        info="Organization Name as per Records"
        error="Please enter a valid Organization Name"
        />
    </form>

  )
}

export default RegisterForm