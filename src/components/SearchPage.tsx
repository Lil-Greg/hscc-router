/* eslint-disable react-hooks/rules-of-hooks */
import { useRef, useState } from "react"
import { useSearchPokemon } from "./hooks/usePokemonApi";

export default function SearchPage() {
    const searchRef = useRef(null);
    const [pokemonName, setPokemonName] = useState(undefined);
    const pokemon = useSearchPokemon(pokemonName)
    const handleSubmit = (event) => {
        event.preventDefault();
        setPokemonName(searchRef.current?.value);
    }
    return <>
        <form onSubmit={handleSubmit}>
            <input type="text" ref={searchRef} placeholder="Search Pokemon" />
            <button type="submit"></button>
        </form>
        {pokemon && pokemon.name}
    </>
}