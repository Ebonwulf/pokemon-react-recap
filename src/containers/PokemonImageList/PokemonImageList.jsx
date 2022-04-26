import React from 'react';
import './PokemonImageList.scss';
import PokemonImage from '../../components/PokemonImage/PokemonImage';

const PokemonImageList = ({ pokemonArray }) => {
  const pokemonJSX = pokemonArray.map((pokemon) => {
    return (
      <PokemonImage
        key={`Pokemon ${pokemon.id}`}
        name={pokemon.name}
        sprite={pokemon.sprite}
      />
    );
  });
  return (
    <>
      <div className='poke-image-container'>{pokemonJSX}</div>
    </>
  );
};

export default PokemonImageList;
