import React from 'react'
import InputField from './InputField'
import OrgIcon from '../Assets/svg/org.svg'

const RegisterForm = () => {
  return (
    <form>
        <InputField label={"Organization Name"} icon={OrgIcon}/>
    </form>

  )
}

export default RegisterForm