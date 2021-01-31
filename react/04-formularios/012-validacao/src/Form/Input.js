import React from 'react'

const Input = ({ id, label, type, value, onChange, ...props }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={id}
        onChange={onChange}
        {...props}
      /> 
    </>
  )
}

export default Input
