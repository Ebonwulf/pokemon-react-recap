import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './PokemonCard.scss';
import { toProper } from '../../utils';

const PokemonCard = ({ pokemonArr }) => {
  const { id } = useParams();
  console.log(id);

  const thePokemon = pokemonArr.find((pokemon) => {
    return pokemon.id == id;
  });
  console.log(thePokemon);

  const generateImage = (pokemon) => {
    return (
      <img
        src={pokemon.sprite}
        alt={toProper(pokemon.name)}
        className='card__image'
      />
    );
  };
  const generateCardContent = (pokemon) => {
    const heading = <h2 className='card__heading'>{toProper(pokemon.name)}</h2>;
    let typeDescr = pokemon.types[0];
    if (pokemon.types.length > 1) {
      pokemon.types.join(' & ');
    }
    const text = (
      <p className='card__text'>
        {toProper(pokemon.name)} (#{pokemon.id}) is a {typeDescr} type pokemon.
      </p>
    );
    return (
      <div className='card__content'>
        {heading}
        {text}
      </div>
    );
  };
  return (
    <>
      <article className='pokemon-card'>
        {generateImage(thePokemon)} {generateCardContent(thePokemon)}
        <div></div>
      </article>
      <Link to='/'>
        <button>Back</button>
      </Link>
    </>
  );
};

export default PokemonCard;
