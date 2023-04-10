import { useContext } from 'react'
import { PokemonContext } from '../context/PokemonContext'

export const FilterBar = () => {

    const { active, handleCheckbox, setActive } = useContext(PokemonContext);

    const handleCloseFilter = () => {
        setActive(false);
    };

  return (
    <div className={`container-filters ${active ? 'active' : ''}`}>
        <div className="container-close-filters">
            <div className="icon-filter filter-close" onClick={() => setActive(!active)} >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="icon">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9.75L14.25 12m0 0l2.25 2.25M14.25 12l2.25-2.25M14.25 12L12 14.25m-2.58 4.92l-6.375-6.375a1.125 1.125 0 010-1.59L9.42 4.83c.211-.211.498-.33.796-.33H19.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-9.284c-.298 0-.585-.119-.796-.33z" />
                </svg>
                <span>Close Filter</span>
            </div>
        </div>
        <div className="filter-by-type">
            <span>Type</span>

            <div className="group-type">
                <input type="checkbox" onChange={handleCheckbox} name="normal" id="normal" />
                <label htmlFor="normal">Normal</label>
            </div>
            <div className="group-type">
                <input type="checkbox" onChange={handleCheckbox} name="fighting" id="fighting" />
                <label htmlFor="fighting">Fighting</label>
            </div>
            <div className="group-type">
                <input type="checkbox" onChange={handleCheckbox} name="flying" id="flying" />
                <label htmlFor="flying">Flying</label>
            </div>
            <div className="group-type">
                <input type="checkbox" onChange={handleCheckbox} name="poison" id="poison" />
                <label htmlFor="poison">Poison</label>
            </div>
            <div className="group-type">
                <input type="checkbox" onChange={handleCheckbox} name="ground" id="ground" />
                <label htmlFor="ground">Ground</label>
            </div>
            <div className="group-type">
                <input type="checkbox" onChange={handleCheckbox} name="rock" id="rock" />
                <label htmlFor="rock">Rock</label>
            </div>
            <div className="group-type">
                <input type="checkbox" onChange={handleCheckbox} name="bug" id="bug" />
                <label htmlFor="bug">Bug</label>
            </div>
            <div className="group-type">
                <input type="checkbox" onChange={handleCheckbox} name="ghost" id="ghost" />
                <label htmlFor="ghost">Ghost</label>
            </div>
            <div className="group-type">
                <input type="checkbox" onChange={handleCheckbox} name="steel" id="steel" />
                <label htmlFor="steel">Steel</label>
            </div>
            <div className="group-type">
                <input type="checkbox" onChange={handleCheckbox} name="fire" id="fire" />
                <label htmlFor="fire">Fire</label>
            </div>
            <div className="group-type">
                <input type="checkbox" onChange={handleCheckbox} name="water" id="water" />
                <label htmlFor="water">Water</label>
            </div>
            <div className="group-type">
                <input type="checkbox" onChange={handleCheckbox} name="grass" id="grass" />
                <label htmlFor="grass">Grass</label>
            </div>
            <div className="group-type">
                <input type="checkbox" onChange={handleCheckbox} name="electric" id="electric" />
                <label htmlFor="electric">Electric</label>
            </div>
            <div className="group-type">
                <input type="checkbox" onChange={handleCheckbox} name="psychic" id="psychic" />
                <label htmlFor="psychic">Psychic</label>
            </div>
            <div className="group-type">
                <input type="checkbox" onChange={handleCheckbox} name="ice" id="ice" />
                <label htmlFor="ice">Ice</label>
            </div>
            <div className="group-type">
                <input type="checkbox" onChange={handleCheckbox} name="dragon" id="dragon" />
                <label htmlFor="dragon">Dragon</label>
            </div>
            <div className="group-type">
                <input type="checkbox" onChange={handleCheckbox} name="dark" id="dark" />
                <label htmlFor="dark">Dark</label>
            </div>
            <div className="group-type">
                <input type="checkbox" onChange={handleCheckbox} name="fairy" id="fairy" />
                <label htmlFor="fairy">Fairy</label>
            </div>
            <div className="group-type">
                <input type="checkbox" onChange={handleCheckbox} name="unknown" id="unknown" />
                <label htmlFor="unknown">Unknown</label>
            </div>
            <div className="group-type">
                <input type="checkbox" onChange={handleCheckbox} name="shadow" id="shadow" />
                <label htmlFor="shadow">Shadow</label>
            </div>

        </div>
    </div>
  )
}
