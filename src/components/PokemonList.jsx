import { useContext } from 'react'
import { Loader } from './Loader';

export const PokemonList = () => {

  const { allPokemons, loading } = useContext(PokemonContext);

  return (
    <>
      {
        loading ? (
          <Loader />
        ) : (
      <div className="card-list-pokemon container">
        {allPokemons.map(pokemon => <CardPokemon pokemon={pokemon} key={pokemon.id} />)}
      </div>
        )
      }
    </>
  )
}

