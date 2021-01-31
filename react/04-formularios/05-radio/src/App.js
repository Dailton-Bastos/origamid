import React from 'react'

const App = () => {
  const [produto, setProduto] = React.useState('')
  const [cor, setCor] = React.useState('')

  function handleChange({ target }) {
    return setProduto(target.value)
  }

  return (
    <form>
      <h2>Cores</h2>
      <label>
        <input
          type="radio"
          value="azul"
          checked={cor === 'azul'}
          onChange={(({ target }) => setCor(target.value))}
        />
        Azul
      </label>
      <label>
        <input
          type="radio"
          value="vermelho"
          checked={cor === 'vermelho'}
          onChange={(({ target }) => setCor(target.value))}
        />
        Notebook
      </label>
      <h2>Produtos</h2>
      <label>
        <input
          type="radio"
          value="smartphone"
          checked={produto === 'smartphone'}
          onChange={handleChange}
        />
        Smartphone
      </label>
      <label>
        <input
          type="radio"
          value="notebook"
          checked={produto === 'notebook'}
          onChange={handleChange}
        />
        Notebook
      </label>
    </form>
  )
}

export default App
