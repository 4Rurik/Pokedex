import { PokemonContext } from "./PokemonContext"

export const PokemonProvider = ({ children }) => {

  return (
    <PokemonContext.Provider value={{
        number: 0
    }}>
        { children }
    </PokemonContext.Provider>
  )
}
