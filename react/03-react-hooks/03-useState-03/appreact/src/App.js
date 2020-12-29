import React from 'react'
import Button from './Button'
import Produto from './Produto'
import Loading from './Loading'

const App = () => {
  const [produto, setProduto] = React.useState(null)
  const [loading, setLoading] = React.useState(null)

  const fetchProduto = async (produtoNome) => {
    setLoading(true)
    const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${produtoNome}`)
    const data = await response.json()
    setLoading(false)
    return setProduto(data)
  }

  return (
    <>
      <Button
        titulo="notebook"
        onClick={() => fetchProduto('notebook')}
      />

      <Button
        titulo="smartphone"
        onClick={() => fetchProduto('smartphone')}
      />

      <Button
        titulo="tablet"
        onClick={() => fetchProduto('tablet')}
      />

      { loading && <Loading /> }

      { !loading && produto && <Produto produto={produto} /> }
    </>

  )
}

export default App;
