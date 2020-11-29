import React from 'react'

const App = () => {

  function handleScroll(event) {
    return console.log(event)
  }

  window.addEventListener('scroll', handleScroll)

  return (
    <div style={{ height: '200vh' }}>
      <button onClick={(event) => alert(event.target.innerText)}>
        Compre violão
      </button>
    </div>
  )
}

export default App;
