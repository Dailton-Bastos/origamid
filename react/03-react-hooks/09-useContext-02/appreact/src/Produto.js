import React from 'react'
import { GlobalContext } from './GlobalContext'

const Produto = () => {
  const global = React.useContext(GlobalContext)

  if(!global) return null

  return (
    <div>
      <h1>Lista de produtos</h1>
      <ul>
        {global?.dados?.map((produto) => (
          <li key={produto.id}>{produto.nome}</li>
        ))}
      </ul>
    </div>
  )
}

export default Produto
