import React from 'react'
import useLocalStorage from './useLocalStorage'

const App = () => {
  const [produto, setProduto] = useLocalStorage('produto', '')

  function handleClick({ target }) {
    setProduto(target.innerText)
  }

  return (
    <div>
      <h1>Produto: {produto}</h1>
      <button onClick={handleClick} style={{ marginRight: '1rem'}}>notebook</button>
      <button onClick={handleClick}>smartphone</button>
    </div>
  )
}

export default App
