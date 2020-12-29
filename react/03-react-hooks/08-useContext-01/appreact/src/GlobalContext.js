import React from 'react'

export const GlobalContext = React.createContext()

// provider = storage baú
export const GlobalStorage = (({ children }) => {
  const [contar, setContar] = React.useState(0)

  function adicionar() {
    setContar((contar) => contar + 1)
  }

  function remover() {
    setContar((contar) => contar - 1)
  }

  if(contar < 0) {
    setContar(0)
  }

  return (
    <GlobalContext.Provider value={{ contar, adicionar, remover }}>
      { children }
    </GlobalContext.Provider>
  )
})