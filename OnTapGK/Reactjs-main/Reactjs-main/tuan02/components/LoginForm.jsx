import React from 'react'
import Input from './Input'
import './LoginForm.css'
import { Button } from './Button'


const LoginForm = ({background,border}) => {

  return (
    <div style={{backgroundColor:background}} className='login'>
      <Button type='close' text='&times;'></Button>
      <Input label='User Name' placeholder='User Name'></Input>
      <Input label='Password' placeholder='Password'></Input>
      <Button text='Login' type='primary'></Button> 
    </div>
  )
}

export default LoginForm
