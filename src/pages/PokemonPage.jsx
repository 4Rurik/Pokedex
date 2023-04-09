import { useContext, useEffect, useState } from 'react'
import { PokemonContext } from '../context/PokemonContext'
import { useParams } from 'react-router-dom';
import { capsFirst } from '../helper/helper';

export const PokemonPage = () => {

  const { getPokemonByID } = useContext(PokemonContext);

  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState({});

  const { id } = useParams();

  const fetchPokemon = async(id) => {
    const data = await getPokemonByID(id);
    setPokemon(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchPokemon(id);
  }, [])

  return (
    <main className="container main-pokemon">
      {
        loading ? (
          <Loader />
        ) : (
          <>
            <div className='header-main-pokemon'>
              <span className='number-pokemon'>No. {pokemon.id}</span>
              <div className='container-img-pokemon'>
                <img
                  src={pokemon.sprites?.other?.['official-artwork']?.front_default} alt={`Pokemon ${pokemon?.name}`} />
              </div>

              <div className='container-info-pokemon'>
                <h1>{capsFirst(pokemon.name)}</h1>
                <div className='card-types info-pokemon-type'>
                  {pokemon.types.map(type => (
                    <span key={type.type.name} className={`${type.type.name}`}>
                      {type.type.name}
                    </span>
                  ))}
                </div>
                <div className='info-pokemon'>
                  <div className='group-info'>
                    <p>Height</p>
                    <span>{pokemon.height / 10} cm.</span>
                  </div>
                  <div className='group-info'>
                    <p>Weight</p>
                    <span>{pokemon.weight} Kg.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className='container-stats'>
              <h1>Stats</h1>
              <div className='stats'>
                {pokemon.stats.map((stat) => (
                  <div className="stat-group" key={stat.stat.name}>
                    <span>{stat.stat.name}</span>
                    <div className="progress-bar">
                      <div
                        className="progress-fill"
                        style={{ width: `${stat.base_stat}%` }}
                        role="progressbar"
                        aria-valuenow={stat.base_stat}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <span className="counter-stat">{stat.base_stat}</span>
                  </div>
                ))}
              </div>
            </div>
          </>
        )
      }
    </main>
  )
}
