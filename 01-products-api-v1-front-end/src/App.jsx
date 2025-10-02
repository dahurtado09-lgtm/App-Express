import { useEffect } from 'react'
import './App.css'
import { Card } from './components/Card'

function App() {

  useEffect(() => {
    fetch('http://localhost:3000/products')
    .then(response => response.json())
    .then(data => console.log(data))
  }, [])

  return (
    <>
      <h1>Productos</h1>
      <Card />
    </>
  )
}

export default App
