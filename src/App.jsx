import './App.scss';
import NavBar from './containers/NavBar/NavBar';
import pokemonArray from './data/pokemon';
import PokemonImageList from './containers/PokemonImageList/PokemonImageList';

const App = () => {
  console.log(pokemonArray.length);
  return (
    <div className=''>
      <NavBar />
      <PokemonImageList pokemonArray={pokemonArray} />
    </div>
  );
};

export default App;
