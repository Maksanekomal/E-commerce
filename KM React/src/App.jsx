import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black 0-4 rounded-xl mb-4'>Komal Maksane</h1>
      <Card  username="Maksane" />
      <Card />
    </>
  )
}

export default App
