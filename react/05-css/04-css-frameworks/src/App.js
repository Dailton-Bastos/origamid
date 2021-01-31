import React from 'react'
import Card from 'react-bootstrap/Card'

const App = () => {
  return (
    <Card bg="dark" text="white" className="m-5" style={{ maxWidth: '18rem' }}>
      <Card.Header>Notebook</Card.Header>
      <Card.Body>
        <Card.Title>R$ 2.500,00</Card.Title>
        <Card.Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default App
