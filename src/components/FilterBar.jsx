import { useContext } from 'react'
import { PokemonContext } from '../context/PokemonContext'

export const FilterBar = () => {

  const { active } = useContext(PokemonContext);

  return (
    <div className={`container-filters ${active ? 'active' : ''}`}>
        <div className="filter-by-type">
            <span>Type</span>

            <div className="group-type">
                <input type="checkbox" name="normal" id="normal" />
                <label htmlFor="normal">Normal</label>
            </div>
            <div className="group-type">
                <input type="checkbox" name="fighting" id="fighting" />
                <label htmlFor="fighting">Fighting</label>
            </div>
            <div className="group-type">
                <input type="checkbox" name="flying" id="flying" />
                <label htmlFor="flying">Flying</label>
            </div>
            <div className="group-type">
                <input type="checkbox" name="poison" id="poison" />
                <label htmlFor="poison">Poison</label>
            </div>
            <div className="group-type">
                <input type="checkbox" name="ground" id="ground" />
                <label htmlFor="ground">Ground</label>
            </div>
            <div className="group-type">
                <input type="checkbox" name="rock" id="rock" />
                <label htmlFor="rock">Rock</label>
            </div>
            <div className="group-type">
                <input type="checkbox" name="bug" id="bug" />
                <label htmlFor="bug">Bug</label>
            </div>
            <div className="group-type">
                <input type="checkbox" name="ghost" id="ghost" />
                <label htmlFor="ghost">Ghost</label>
            </div>
            <div className="group-type">
                <input type="checkbox" name="steel" id="steel" />
                <label htmlFor="steel">Steel</label>
            </div>
            <div className="group-type">
                <input type="checkbox" name="fire" id="fire" />
                <label htmlFor="fire">Fire</label>
            </div>
            <div className="group-type">
                <input type="checkbox" name="water" id="water" />
                <label htmlFor="water">Water</label>
            </div>
            <div className="group-type">
                <input type="checkbox" name="grass" id="grass" />
                <label htmlFor="grass">Grass</label>
            </div>
            <div className="group-type">
                <input type="checkbox" name="electric" id="electric" />
                <label htmlFor="electric">Electric</label>
            </div>
            <div className="group-type">
                <input type="checkbox" name="psychic" id="psychic" />
                <label htmlFor="psychic">Psychic</label>
            </div>
            <div className="group-type">
                <input type="checkbox" name="ice" id="ice" />
                <label htmlFor="ice">Ice</label>
            </div>
            <div className="group-type">
                <input type="checkbox" name="dragon" id="dragon" />
                <label htmlFor="dragon">Dragon</label>
            </div>
            <div className="group-type">
                <input type="checkbox" name="dark" id="dark" />
                <label htmlFor="dark">Dark</label>
            </div>
            <div className="group-type">
                <input type="checkbox" name="fairy" id="fairy" />
                <label htmlFor="fairy">Fairy</label>
            </div>
            <div className="group-type">
                <input type="checkbox" name="unknown" id="unknown" />
                <label htmlFor="unknown">Unknown</label>
            </div>
            <div className="group-type">
                <input type="checkbox" name="shadow" id="shadow" />
                <label htmlFor="shadow">Shadow</label>
            </div>

        </div>
    </div>
  )
}
