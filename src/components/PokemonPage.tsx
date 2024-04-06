import { NavLink, Outlet } from "react-router-dom";
import usePokemonApi, { useSearchPokemon } from "./hooks/usePokemonApi"
import { useRef, useState } from "react";

export default function Pokemon() {
    const { jsonData, pagination } = usePokemonApi()
    console.log(jsonData);
    // Search Input
    // const searchRef = useRef(null);
    // const [pokemonName, setPokemonName] = useState(undefined);
    // const searchPokemon = useSearchPokemon(pokemonName)
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     setPokemonName(searchRef.current?.value);
    // }

    return <>
        <h1>Pokemon Page</h1>

        {/* <form onSubmit={handleSubmit}>
            <input type="text" ref={searchRef} placeholder="Search Pokemon" />
            <button type="submit"></button>
        </form> */}

        <ul>
            {/* Map - looping through the pokemon from the jsonData results
                and applying the html to it. */}
            {jsonData?.results.map(pokemon => {
                const number = pokemon.url.split("/")[6];
                return <li key={pokemon.name}>

                    <NavLink to={`/pokemon/${number}`}>
                        {"#" + number + " "}{pokemon.name}
                    </NavLink>
                </li>
            })}
        </ul >
        <button onClick={() => { pagination("previous") }}>Previous</button>
        <button onClick={() => { pagination("next") }}>Next</button>
        <Outlet></Outlet>
    </>
}