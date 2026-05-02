import React from 'react'
import './Alert.css'

const Alert = ({type}) => {
  let classname=`alert alert-${type}`

  if(type==null) return null;

    return (
    <div className={classname}>
      {type}

    </div>
  )
}

export default Alert
