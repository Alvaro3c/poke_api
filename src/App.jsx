import React, { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "./components/Header/Header";
import { PokemonsContext } from "./context/pokemonsContext";
import getPokemonsApi from "./api/getPokemons";
import getPokemonApi from "./api/getPokemon";

export default function App() {
  const [pokemons, setPokemons] = useState([]);
  const navigate = useNavigate();

  const addPokemon = (pokemon) => {
    if (pokemons.find((p) => p.name === pokemon.name)) {
      alert('Pokemon already exists');
      return;
    }
    setPokemons([pokemon, ...pokemons]);
    return navigate('/');
  };

  const getPokemon = async (name) => {
    const pokemon = pokemons.find((pokemon) => [pokemon.name.toLowerCase(), pokemon.id].includes(name.toLowerCase()));
    if (pokemon) return pokemon;
    try {               
      const response = await getPokemonApi(name);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  useEffect(() => {
    const getPokemons = async () => {
      try {
        const response = await getPokemonsApi();
        const data = await response.json();
        setPokemons(data.results);
      } catch (error) {
        console.log(error);
      }
    };

    getPokemons();
  }, []);

  return (
    <PokemonsContext.Provider value={{
      pokemons,
      setPokemons,
      addPokemon,
      getPokemon
    }}>
      <Header />
      <Outlet />
      <footer>
        <small>Pokemon app created with pokemon API</small>
      </footer>
    </PokemonsContext.Provider>
  );
}
