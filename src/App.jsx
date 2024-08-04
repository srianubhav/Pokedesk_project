import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Pokedexk from './Components/Pokedesk/Pokedesk'
import PokemonList from './Components/PokemonList/PokemonList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Pokedexk />
  
    </>
  )
}

export default App
