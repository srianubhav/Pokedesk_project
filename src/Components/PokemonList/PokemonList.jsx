import { useEffect, useState } from "react";
import './PokemonList.css';
import axios from 'axios';
import Pokemon from "../Pokemon";

function PokemonList() {
    const [pokemonList, setPokemonList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const POKEDAK_URL="https://pokeapi.co/api/v2/pokemon"

    async function DownloadPokemon() {
        try {
            const response = await axios.get(POKEDAK_URL);
            const pokemonResults = response.data.results;
            const pokemonResultPromise = pokemonResults.map((pokemon) => axios.get(pokemon.url));
            const pokemonData = await axios.all(pokemonResultPromise);

            const res = pokemonData.map((pokeData) => {
                const pokemon = pokeData.data;
                return {
                    id: pokemon.id,
                    name: pokemon.name,
                    image: pokemon.sprites.other.dream_world.front_default,
                    types: pokemon.types
                };
            });

            setPokemonList(res);
            setIsLoading(false);
        } catch (error) {
            console.error("Error fetching Pokemon data:", error);
            setIsLoading(false);
        }
    }

    useEffect(() => {
        DownloadPokemon();
    }, []);

    return (
        <div id="Pokemon-list-wrapper">
           

            <div className="Pokemon-wrapper" >
            {isLoading ? 'Loading...' :
                pokemonList.map((p) => <Pokemon name={p.name} image={p.image} key={p.id} />)
            }


            
             
            </div>

            <div className="controls">
            <button>Prev</button>
            <button>Next</button>
            </div>
               
                
        </div>
    );
}

export default PokemonList;
