import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'; // Make sure axios is imported
import './PokemonDetails.css'

function PokemonDetails() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState({ name: '', image: '', weight: '', height: '', types: [] });

  async function downloadPokemon() {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    setPokemon({
      name: response.data.name,
      image: response.data.sprites.other.dream_world.front_default,
      weight: response.data.weight,
      height: response.data.height,
      types: response.data.types.map((t) => t.type.name),
    });
  }

  useEffect(() => {
    downloadPokemon();
  }, []);

  return (
    <div className="Pokemon-details-wrapper">
      <div className="pokemon-details-name">Name:   <span>{pokemon.name}</span></div>
      <img className="pokemon-img-details" src={pokemon.image} alt={pokemon.name} />
      <div  className="pokemon-details-name">Height: {pokemon.height}</div>
      <div className=" pokemon-details-name">Weight: {pokemon.weight}</div>
      <div className="pokemon-details-types">
        {pokemon.types.map((t) => (
          <div key={t}>{t}</div>
        ))}
      </div>
    </div>
  );
}

export default PokemonDetails;