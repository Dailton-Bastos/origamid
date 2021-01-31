import React from 'react'
import Input from './Form/Input'
import Select from './Form/Select'
import Radio from './Form/Radio'
import Checkbox from './Form/Checkbox'

const App = () => {
  const [nome, setNome] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [produto, setProduto] = React.useState('')
  const [cor, setCor] = React.useState('Vermelho')
  const [fruta, setFruta] = React.useState('')
  const [linguagens, setLinguagens] = React.useState([])
  const [termos, setTermos] = React.useState([])

  return (
    <form>
      <h2>Termos</h2>
      <Checkbox
        options={['Li e aceito os termos.']}
        value={termos}
        setValue={setTermos}
      />

      <h2>Linguagens</h2>
      <Checkbox
        options={['Javascript', 'PHP', 'Ruby']}
        value={linguagens}
        setValue={setLinguagens}
      />

      <h2>Cores</h2>
      <Radio
        options={['Azul', 'Vermelho']}
        value={cor}
        setValue={setCor}
      />

      <h2>Frutas</h2>
      <Radio
        options={['Limão', 'Laranja', 'Uva']}
        value={fruta}
        setValue={setFruta}
      />

      <Select
        options={['Notebook', 'Smartphone']}
        value={produto}
        setValue={setProduto}
      />

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
