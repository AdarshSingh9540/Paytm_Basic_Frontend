import React from 'react'
import Heading from '../components/Heading'
import InputBox from '../components/InputBox'
import Button from '../components/Button'
import ButtonWarning from '../components/ButtonWarning'
import SubHeading from '../components/SubHeading'
function SignIn() {
  return (
    <div className='bg-slate-300 h-screen flex justify-center'>
    <div className='flex flex-col justify-center'>
      <div className='rounded-lg bg-white w-80 text-center p-4 px-4 h-mamx '> 
        <Heading label={"Sign In"}/>
        <SubHeading label={"Enter your details for signin"} />
        <InputBox label={"Email"} placeholder={"email"}/>
        <InputBox label={"Password"} placeholder={"password"}/>
        <div className='pt-4'>
          <Button label={"Sign In"}/>
          <ButtonWarning  buttonText={"Sign Up"} to={"/signup"} /> 
        </div>
      </div>
    </div>
  </div>
  )
}

export default SignIn