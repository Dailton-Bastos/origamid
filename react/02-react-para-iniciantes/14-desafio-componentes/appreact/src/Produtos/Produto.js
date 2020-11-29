import React from 'react'

const Produto = ({ nome, propriedades }) => {

  const style = {
    border: '1px solid #000',
    margin: '1rem 0',
    padding: '1rem',
  }

  return (
    <div style={style}>
      <p>{nome}</p>
      <ul>
        {propriedades.map((propriedade) => (
          <li key={propriedade}>{propriedade}</li>
        ))}
      </ul>
    </div>
  )
}

export default Produto
