import { useContext, useEffect, useState } from 'react'
import { PokemonContext } from '../context/PokemonContext'
import { useParams } from 'react-router-dom';
import { Loader } from '../components';
import { capsFirst } from '../helper/helper';

export const PokemonPage = () => {

  const { getPokemonByID } = useContext(PokemonContext);

  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState({});

  const {id} = useParams();

  const fetchPokemon = async id => {
    const data = await getPokemonByID(id);
    setPokemon(data);
    setLoading(false);
  }

  const typeColors = {
    normal: '#a4acaf',
    fighting: 'linear-gradient(180deg, #d56723 50%, #6e1a00 50%)',
    flying: '#95e8ff',
    poison: '#7e0058',
    ground: '#6e1a00',
    rock: '#756237',
    bug: '#9cbe1e',
    ghost: 'linear-gradient(180deg, #a4acaf 50%, #7b62a3 50%)',
    steel: '#753845',
    fire: '#ff7402',
    water: '#0050ac',
    grass: '#33a165',
    electric: '#ffea00',
    psychic: '#c90086',
    ice: '#3dc7ef',
    dragon: 'linear-gradient(180deg, #d13f25 50%, #2022a0 50%)',
    dark: '#43395a',
    fairy: '#fdb9e9',
    unknown: '#757575',
    shadow: 'linear-gradient(180deg, #757575 50%, #303030 50%)'
  };

  const getTypeBackground = () => {
    const type = pokemon.types && pokemon.types[0].type.name;
    const color = typeColors[type] || 'linear=gradient(180deg, #a7a7a7, #5d5d5d)';
    return { background: `linear-gradient(180deg, rgba(255, 255, 255, 0.63) 0%, rgba(0, 0, 0, 0.63) 100%), ${color}`}
  }

  useEffect(() => {
    fetchPokemon(id);
  }, [])

  return (
    <main className='container main-pokemon' style={getTypeBackground()}>
      {
        loading ? ( <Loader /> ) : (
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
                    <span>{pokemon.height * 10} cm.</span>
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
