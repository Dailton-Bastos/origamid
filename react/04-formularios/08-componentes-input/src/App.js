import React from 'react'
import Input from './Form/Input'

const App = () => {
  const [nome, setNome] = React.useState('')
  const [email, setEmail] = React.useState('')

  return (
    <form>
      <Input
        type="text"
        id="nome"
        label="Nome"
        value={nome}
        setValue={setNome}
        required
      />

      <Input
        type="email"
        id="email"
        label="Email"
        value={email}
        setValue={setEmail}
      />
      <button type="submit">Enviar</button>
    </form>
  )
}

export default App
