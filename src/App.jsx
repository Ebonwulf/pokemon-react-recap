import { useState } from 'react';
import './App.scss';
import NavBar from './containers/NavBar/NavBar';
import PokemonImageList from './containers/PokemonImageList/PokemonImageList';
import pokemonArray from './data/pokemon';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [fuzzySearch, setFuzzySearch] = useState(false);
  const filteredPokemon = pokemonArray.filter((pokemon) => {
    //use toLowerCase to prevent errors if uppercase is used
    //use .startsWith for a search starting with input entered
    //use .includes for a search with input entered that includes it anywhere in the name
    if (fuzzySearch) {
      return pokemon.name.toLowerCase().includes(searchTerm);
    } else {
      return pokemon.name.toLowerCase().startsWith(searchTerm);
    }
  });
  const fuzzySearchHandler = () => {
    setFuzzySearch(!fuzzySearch);
  };

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
