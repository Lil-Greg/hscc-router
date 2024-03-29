import usePokemonApi from "./hooks/usePokemonApi"

export default function Pokemon() {
    const { jsonData, pagination } = usePokemonApi()
    console.log(jsonData);

    return <>
        <h1>Pokemon Page</h1>
        <ul>
            {jsonData?.results.map(pokemon => {
                const number = pokemon.url.split("/")[6];
                console.log(number)
                return <li key={pokemon.name}>{number} {pokemon.name}</li>
            })}
        </ul>
        <button onClick={() => { pagination("previous") }}>Previous</button>
        <button onClick={() => { pagination("next") }}>Next</button>
    </>
}