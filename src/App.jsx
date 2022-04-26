import { useState } from 'react';
import './App.scss';
import NavBar from './containers/NavBar/NavBar';
import PokemonImageList from './containers/PokemonImageList/PokemonImageList';
import pokemonArray from './data/pokemon';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredPokemon = pokemonArray.filter((pokemon) => {
    //use toLowerCase to prevent errors if uppercase is used
    return pokemon.name.toLowerCase().startsWith(searchTerm);
  });

  console.log(filteredPokemon);
  console.log('filteredPokemon');
  const searchTermChangeHandler = (event) => {
    const text = event.target.value.toLowerCase();
    setSearchTerm(text);
  };
  return (
    <div className=''>
      <NavBar
        searchTerm={searchTerm}
        searchTermChangeHandler={searchTermChangeHandler}
        searchResultCount={filteredPokemon.length}
      />
      <PokemonImageList pokemonArr={filteredPokemon} />
    </div>
  );
};

export default App;
