import React from 'react'
import Produto from './Produto'

const App = () => {
  const [produto, setProduto] = React.useState(null)

  React.useEffect(() => {
    const produtoLocal = window.localStorage.getItem('produto')
    if(produtoLocal) setProduto(produtoLocal)

  }, [])

  React.useEffect(() => {
    if(produto) window.localStorage.setItem('produto', produto)

  }, [produto])

  function handleClick({ target }) {
    setProduto(target.innerText)
  }

  return (
    <>
      <h1>Preferência: {produto}</h1>

      <button onClick={handleClick} style={{marginRight: '1rem'}}>
        notebook
      </button>
      
      <button onClick={handleClick}>smartphone</button>

      <Produto produto={produto}/>
    </>
  )
}

export default App
