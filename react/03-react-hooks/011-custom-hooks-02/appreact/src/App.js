import React from 'react'
import useLocalStorage from './useLocalStorage'
import useFetch from './useFetch'

const App = () => {
  const [produto, setProduto] = useLocalStorage('produto', '')
  const {request, data, loading, error} = useFetch()

  React.useEffect(() => {
    async function fetchData() {
      const { response, json } = await request('https://ranekapi.origamid.dev/json/api/produto')
      
      console.log('Response', response)
      console.log('JSON', json)
    }
    
    fetchData()
  },[request])

  function handleClick({ target }) {
    setProduto(target.innerText)
  }

  if(error) return <p>{error}</p>

  if(loading) return <p>Carregando...</p>

  if(data)
    return (
      <div>
        <h1>Produto: {produto}</h1>
        <button onClick={handleClick} style={{ marginRight: '1rem'}}>notebook</button>
        <button onClick={handleClick}>smartphone</button>

        <p>Lista de produtos</p>
        <ul>
          {data.map((produto) => (
            <li key={produto.id}>
              <h2>{produto.nome}</h2>
              <p>{produto.descricao}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  else return null
}

export default App
