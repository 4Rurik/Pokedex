import { useState } from 'react'
import './App.css'
import { AppRouter } from './AppRouter'
import { PokemonProvider } from './context/PokemonProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <PokemonProvider>
      <AppRouter />
    </PokemonProvider>
  )
}

export default App
