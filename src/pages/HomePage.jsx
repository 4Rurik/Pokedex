import React, { useContext } from 'react'
import { FilterBar, PokemonList } from '../components';
import { PokemonContext } from '../context/PokemonContext';

export const HomePage = () => {

  const { onClickLoadMore, active, setActive } = useContext(PokemonContext);

  return (
    <>
      <div className="container-filter container">
        <div className="icon-filter" onClick={() => setActive(!active)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="icon">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
          </svg>
          <span>Filter</span>
        </div>
      </div>
      <PokemonList />
      <FilterBar />
      <div className="container-btn-load-more container">
        <button className='btn-load-more' onClick={onClickLoadMore}>
          Load more Pokémons
        </button>
      </div>
    </>
  );
};
