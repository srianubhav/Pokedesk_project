import PokemonList from "../PokemonList/PokemonList";
import Search from "../Search/Search";
import './Pokedesk.css';

function Pokedexk(){
    return(
        <div className="Pokedesk-wrapper">
        <Search/>
        <PokemonList/>
        </div>
    )
}
export default Pokedexk;