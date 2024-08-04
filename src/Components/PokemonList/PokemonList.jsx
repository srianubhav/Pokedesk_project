import { useEffect, useState } from "react";
import './PokemonList.css';
import axios from 'axios';
import Pokemon from "../Pokemon";

function PokemonList() {
    const [pokemonList, setPokemonList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const [pokedeskUrl, setPokedeskUrl] = useState("https://pokeapi.co/api/v2/pokemon");
    const [nextUrl, setNextUrl] = useState("");
    const [prevUrl, setPrevUrl] = useState("");

    async function DownloadPokemon() {
        try {
            setIsLoading(true);
            const response = await axios.get(pokedeskUrl);
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
            setNextUrl(response.data.next);
            setPrevUrl(response.data.previous);
            setIsLoading(false);
        } catch (error) {
            console.error("Error fetching Pokemon data:", error);
            setIsLoading(false);
        }
    }

    useEffect(() => {
        DownloadPokemon();
    }, [pokedeskUrl]);

    const handleNext = () => {
        if (nextUrl) {
            setPokedeskUrl(nextUrl);
        }
    };

    const handlePrev = () => {
        if (prevUrl) {
            setPokedeskUrl(prevUrl);
        }
    };

    return (
        <div id="Pokemon-list-wrapper">
            <div>Pokemon List</div>
            <div className="Pokemon-wrapper">
                {isLoading ? 'Loading...' :
                    pokemonList.map((p) => <Pokemon name={p.name} image={p.image} key={p.id}  id={p.id} />)
                }
            </div>
            <div className="controls">
                <button onClick={handlePrev} disabled={!prevUrl}>Prev</button>
                <button onClick={handleNext} disabled={!nextUrl}>Next</button>
            </div>
        </div>
    );
}

export default PokemonList;
