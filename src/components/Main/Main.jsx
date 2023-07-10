import React, { useContext } from "react";
import Card from "../List/Card/Card";
import { PokemonsContext } from "../../context/pokemonsContext";
import './Main.css'

const Main = () => {
    const { pokemons } = useContext(PokemonsContext);
    return <>
        <h1>Home of pokemons</h1>
        <ul>
            {pokemons.map((pokemon, index) => <li key={pokemon.name + index}><Card {...pokemon} /></li>)}
        </ul>
    </>
};

export default Main;
