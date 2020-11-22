// Module (Export / Import)
import quadrado from './quadrado.js'
import numeroAleatorio from './numeroAleatorio.js'

console.log(quadrado.areaQuadrado(5))
console.log(quadrado.perimetroQuadrado(5))

console.log(numeroAleatorio())

// Fetch
const url = 'https://ranekapi.origamid.dev/json/api/produto'
fetch(url)
  .then((response) => response.json())
  .then((json) => {
    console.log(json)
  }).catch((error) => {
    console.log(error)
  })

// Async / Await
const baseURL = 'https://ranekapi.origamid.dev/json/api/produto'

async function fetchProdutos(url) {
  const response = await fetch(url)
  const json = await response.json()
  console.log(json);
  return json
}

const produtos = fetchProdutos(baseURL)

// Arrays (map e filter)

const precos = [
  'Crédito',
  'R$ 200',
  'R$ 400',
  'Contas Pagar',
  'R$ 300',
  'R$ 400',
  'Meud dados',
]

// Filter
const precosFiltro = precos.filter((p) => p.includes('R$'))
console.log(precosFiltro)

// Map
const precosNumeros = precosFiltro.map((p) => Number(p.replace('R$ ', '')))
console.log(precosNumeros)