import React from 'react'

const coresArry = ['azul', 'roxo', 'laranja', 'verde', 'vermelho', 'cinza']

const App = () => {
  const [cores, setCores] = React.useState(['azul'])

  function handleChange({ target }) {
    if(target.checked) {
      setCores([...cores, target.value])
    } else {
      setCores(cores.filter((cor) => cor !== target.value))
    }
  }

  function handleChecked(cor) {
    return cores.includes(cor)
  }

  return (
    <form>
      {coresArry.map((cor) => (
        <label
          key={cor}
          style={{ textTransform: 'capitalize' }}>
          <input
            type="checkbox"
            value={cor}
            checked={handleChecked(cor)}
            onChange={handleChange}
          />
         {cor}
        </label>
      ))}
    </form>
  )
}

export default App
