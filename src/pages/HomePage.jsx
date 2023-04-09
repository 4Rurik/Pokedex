import React from 'react'

export const HomePage = () => {
  return (
    <>
      <div className="container-filter container">
        <div className="icon-filter">
          <svg>
            <path></path>
          </svg>
          <span>Filter</span>
        </div>
      </div>
      <PokemonList />
    </>
  )
}
