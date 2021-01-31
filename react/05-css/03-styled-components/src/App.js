import React from 'react'
import styled from 'styled-components'

const ProdutoContainer = styled.div`
  display: flex;
`

const Produto = styled.div`
  flex: 1;
`

const Titulo = styled.h1`
  font-size: 2rem;
  color: tomato;
`

const Paragrafo = styled.p`
  font-size: 1.5rem;
  color: green;
`

const Preco = styled.p`
  background: hsl(${Math.random() * 360 }, 100%, 50%);
  color: #fff;
`

const Comprar = styled.button`
  position: relative;
  background: ${({ ativo }) => ativo ? '#000' : '#fff'};
  font-size: 1rem;
  border: 2px solid #000;
  border-radius: 5px;
  padding: 0.5rem;
  color: ${({ ativo }) => ativo ? '#fff' : '#000'};
  cursor: pointer;

  &:hover {
    background: tomato;
  }

  &::after {
    position: absolute;
    top: 0;
    right: 0;
    content: '';
    width: 20px;
    height: 20px;
    background: #000;
  }
`

const App = () => {
  const [ativo, setAtivo] = React.useState(false)
  return (
    <>
      <Comprar ativo={ativo} onClick={() => setAtivo(!ativo)}>
        Compre aqui
      </Comprar>

      <ProdutoContainer>
        <Produto>
          <Titulo>Notebook</Titulo>
          <Paragrafo>
            Meu texto é esse.
          </Paragrafo>
          <Preco cor="#84e">R$ 2.000,00</Preco>
        </Produto>

        <Produto>
          <Titulo>Smartphone</Titulo>
          <Paragrafo>
            Meu texto é esse.
          </Paragrafo>
          <Preco cor="#53d956">R$ 1.000,00</Preco>
        </Produto>
      </ProdutoContainer>
    </>
  )
}

export default App
