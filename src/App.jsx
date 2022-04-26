import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import NavBar from './containers/NavBar/NavBar';
import PokemonImageList from './containers/PokemonImageList/PokemonImageList';
import pokemonArr from './data/pokemon';
import PokemonCard from './components/PokemonCard/PokemonCard';

const App = () => {
  // add state into equation
  const [pokemons, setPokemons] = useState(pokemonArr);

  // state for search box and fuzzy indicator
  const [searchText, setSearchText] = useState('');
  const [fuzzySearch, setFuzzySearch] = useState(false);

  // search the list of pokemon, either exact or fuzzy
  const searchByName = (name, fuzzySearch) => {
    return pokemonArr.filter((pokemon) => {
      if (fuzzySearch) {
        return pokemon.name.toLowerCase().includes(name.toLowerCase().trim());
      }
      return pokemon.name.toLowerCase() === name.toLowerCase().trim();
    });
  };

  // perform a search of the pokemon using fuzzy and name
  const loadPokemon = (searchName, fuzzy) => {
    let pokesArray = pokemonArr;
    if (searchName) {
      if (fuzzy) {
        pokesArray = searchByName(searchName, true);
      } else {
        pokesArray = searchByName(searchName, false);
      }
    }
    setPokemons(pokesArray);
    return pokesArray;
  };

  const handleSearchText = (e) => {
    const text = e.target.value.toLowerCase();
    setSearchText(text);
    loadPokemon(text, fuzzySearch);
  };

  const handleFuzzySearch = (e) => {
    const checked = e.target.checked;
    setFuzzySearch(checked);
    loadPokemon(searchText, checked);
  };

  return (
    <Router>
      <div className=''>
        <NavBar
          searchText={searchText}
          searchTextChange={handleSearchText}
          fuzzySearch={fuzzySearch}
          fuzzySearchChange={handleFuzzySearch}
          searchResultCount={pokemons.length}
        />
        <Routes>
          <Route
            path='/'
            element={<PokemonImageList pokemonArr={pokemons} />}
          ></Route>
          <Route
            path='/pokemon/:id'
            element={<PokemonCard pokemonArr={pokemonArr} />}
          ></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
