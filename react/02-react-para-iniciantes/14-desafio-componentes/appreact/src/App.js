import React from 'react'
import Header from './Header/Header'
import Home from './Home/Home'
import Produtos from './Produtos/Produtos'

const App = () => {
  const { pathname } = window.location
  
  let Pagina = Home

  if(pathname === '/produtos') {
    Pagina = Produtos
  } else {
    Pagina = Home
  }

  return (
    <section>
      <Header />
      <Pagina />
    </section>
  )
}

export default App;
