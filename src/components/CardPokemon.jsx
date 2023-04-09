import React from 'react'
import { Link } from 'react-router-dom'

export const CardPokemon = ({ pokemon }) => {
  return (
    <Link to={`/pokemon/${pokemon.id}`} className='card-pokemon'>
        <div className='card-img'>
			<div className='card-info'>
				<div className='name-no'>
					<span className='pokemon-id'>No.{pokemon.id}</span>
					<h3>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h3>
				</div>
				<img src={pokemon.sprites.front_default} alt={`Pokemon ${pokemon.name}`} />
				<div className='card-types'>
					{pokemon.types.map(type => (
						<span key={type.type.name} className={type.type.name}>
							{type.type.name}
						</span>
					))}
				</div>
			</div>
		</div>
    </Link>
  )
}
