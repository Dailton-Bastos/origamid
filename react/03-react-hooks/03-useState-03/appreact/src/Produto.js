import React from 'react'

const Produto = ({ produto }) => {
  const { nome, preco, fotos, descricao } = produto

  const formataPreco = ((valor) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(valor)
  })

  return (
    <section>
      <h1>{nome}</h1>
      <p>{formataPreco(preco)}</p>
      <img src={fotos[0].src} alt={fotos[0].titulo}/>
      <p>{descricao}</p>
    </section>
  )
}

export default Produto
