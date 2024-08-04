import { useState } from 'react'
import { Link } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Pokedexk from './Components/Pokedesk/Pokedesk'
import PokemonList from './Components/PokemonList/PokemonList'
import CoustemRoutes from './routes/CoustemRoutes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='outer-pokedsk'>
     <h1 id="heading">
      <Link to="/"> Pokedesk</Link>
      </h1>
  <CoustemRoutes />
  
    </div>
  )
}

export default App;

