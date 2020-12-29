import React from 'react'
import ButtonModal from './ButtonModal'
import Modal from './Modal'
 
const App = () => {
  const [modal, setModal] = React.useState(false)

  return (
    <div>
      <p>{modal ? 'Modal Aberto!' : 'Modal Fechado!'}</p>
      <Modal modal={modal} setModal={setModal}/>
      <ButtonModal setModal={setModal}/>
    </div>
  )
}

export default App;
