import React from 'react'
import { GlobalContext } from './GlobalContext'

const Produto = () => {
  const global = React.useContext(GlobalContext)

  return (
    <div>
      <h1>Produto: {global.contar}</h1>

      <button onClick={() => global.adicionar()} style={{ marginRight: '1rem' }}>
        +
      </button>

      <button onClick={() => global.remover()}>-</button>
    </div>
  )
}

export default Produto
