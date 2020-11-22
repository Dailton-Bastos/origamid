// Object
const menu = {
  seletor: '.principal',
}

console.log(menu.seletor.toUpperCase())

// Arrow Function
const lowerName = (name) => name.toLowerCase()
console.log(lowerName('DAILTON'))

// Destructuring
// Object
function handleMouse({ clientX, clientY}) {
  return console.log(clientX, clientY)
}
document.addEventListener('click', handleMouse)

// Array
const frutas = ['Banana', 'Uva', 'Laranja']
const [fruta1, fruta2] = frutas

const useQuadrado = [4, (lado) => 4 * lado]

const [lados, perimetro] = useQuadrado
console.log(lados)
console.log(perimetro(4))

// Rest
function showList(empresa, ...clientes) {
  clientes.forEach((cliente) => console.log(cliente, empresa))
}

showList('Google', 'Dailton', 'Gardenia', 'Fernanda')

// Spread
const numeros = [10, 5, 20]
const maior = Math.max(...numeros)
console.log(maior)

const numeros2 = [13, ...numeros, 24, 32, 32]
console.log(numeros2)

const carro = {
  cor: 'Azul',
  portas: 4,
}

const carroAno = { ...carro, ano: '2020'}
console.log(carroAno)