import React from 'react'
import './Button.css'
import { useState } from 'react';
import Alert from './Alert';

export const Button = ({text,type,onClick}) => {
  console.log(onclick)
  let className=`btn btn-${type}`;
  if(type=='close'){
    className=`btn-${type}`;
  }

  
  return (
      <button className={className} onClick={onClick}>{text}</button>
  )
}
