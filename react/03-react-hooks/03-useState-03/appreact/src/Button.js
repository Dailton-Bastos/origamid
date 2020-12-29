import React from 'react'

const Button = ({ titulo, ...props }) => {
  return (
    <button style={{ margin: '10px'}} {...props}>
      {titulo}
    </button>
  )
} 

export default Button
