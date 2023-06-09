import { useContext } from 'react'
import { PokemonContext } from '../context/PokemonContext'
import { useLocation } from 'react-router-dom';
import { CardPokemon } from '../components';

export const SearchPage = () => {

  const location = useLocation();
  const { globalPokemons } = useContext(PokemonContext);
  const filteredPokemons = globalPokemons.filter(pokemon => pokemon.name.includes(location.state.toLowerCase()));

  return (
    <div className="container">
      <p className="p-search">
        <span>{filteredPokemons.length}</span> Pokémons were found:
      </p>
      <div className="card-list-pokemon container">
        {filteredPokemons.map(pokemon => <CardPokemon pokemon={pokemon} key={pokemon.id} />)}
      </div>
    </div>
  )
}
