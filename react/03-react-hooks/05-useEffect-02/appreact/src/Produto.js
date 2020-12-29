import React from 'react'

const Produto = ({ produto }) => {
  const [dados, setDados] = React.useState(null)

  React.useEffect(() => {
    if(produto) {
      fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`)
        .then((response) => response.json())
        .then((json) => setDados(json))
    }
  }, [produto])

  if(!dados) return null

  return (
    <div>
      <p>{dados.nome}</p>
      <p>R$ {dados.preco}</p>
    </div>
  )
}

export default Produto
