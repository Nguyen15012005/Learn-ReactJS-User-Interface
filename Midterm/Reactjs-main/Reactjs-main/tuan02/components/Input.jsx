import React from 'react'
import './Input.css'

const Input = ({placeholder,label}) => {
  return (
    <div>
        <label className='label'>{label}</label>
        <input className='input' type="text" placeholder={placeholder} />
    </div>
  )
}

export default Input
