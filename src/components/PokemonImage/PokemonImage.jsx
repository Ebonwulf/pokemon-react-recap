import React from 'react';
import './PokemonImage.scss';
import { toProper } from '../../utils';
import { Link } from 'react-router-dom';

const PokemonImage = ({ name, sprite, id }) => {
  return (
    <>
      <article className='poke-image-card'>
        <Link to={'/pokemon/' + id}>
          <h2 className='card__heading'>{toProper(name)}</h2>
        </Link>
        <img src={sprite} alt={toProper(name)} className='card__image' />
      </article>
    </>
  );
};

export default PokemonImage;
