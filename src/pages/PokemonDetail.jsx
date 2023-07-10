import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { PokemonsContext } from "../context/pokemonsContext";

const PokemonDetail = () => {
    const { id } = useParams();
    const [pokemon, setPokemon] = useState({});
    const { getPokemon } = useContext(PokemonsContext);

    useEffect(() => {
        const getPokemonFromContext = async () => {
            const pokemon = await getPokemon(id);
            console.log(pokemon);
            if (!pokemon) {
                console.log('Not found');
            }
            setPokemon(pokemon);
        };
        getPokemonFromContext();
    }, [id]);


    const pokemonOutput = <>
        <h1>{pokemon.name}</h1>
        {pokemon.image ? <img style={{
            width: '200px',
        }} src={pokemon.image} alt={pokemon.name} /> : null}
        {pokemon.sprites ? <img src={pokemon.sprites.front_default} alt={pokemon.name} /> : null}
        <p> weight: {pokemon.weight}</p>
        <p> height: {pokemon.height}</p>
        <p> {pokemon.types.map((item) => <li>{item.type.name}</li>)}</p>
    </>
    return <>
        {pokemon ? pokemonOutput : <p>Loading...</p>}
    </>
};

export default PokemonDetail;