import React, { useContext, useEffect, useState } from "react";
import Card from './Card/Card'
import getPokemonsApi from "../../api/getPokemons";
import { PokemonsContext } from "../../context/pokemonsContext";

const List = ({ search }) => {
  const { pokemons, setPokemons } = useContext(PokemonsContext);
  const [filteredPokemons, setFilteredPokemons] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    // Api call
    setError(false);
    setLoading(true);
    const getPokemons = async () => {
      try {
        const response = await getPokemonsApi(search);
        const data = await response.json();
        if (!search) {
          setPokemons(data.results);
          setFilteredPokemons(data.results);
        } else {
          setFilteredPokemons(data.forms);
        }
      } catch (error) {
        console.log(error);
        setError(true);
        setFilteredPokemons([]);
      } finally {
        setLoading(false);
      }
    }

    if (search) {
      const pokemon = pokemons.find(pokemon => pokemon.name.toLowerCase().includes(search.toLowerCase()));
      if (pokemon) {
        setFilteredPokemons([pokemon]);
        setError(false);
        setLoading(false);
        return;
      }
      
    }

    if (!search && pokemons.length) {
      setFilteredPokemons(pokemons);
      setError(false);
      setLoading(false);
      return;
    }

    getPokemons();

  }, [search])

  return <>
    {error && !loading ? <p style={{color: 'tomato'}}>Could not find a pokemon with the name {search}</p> : null}
    {loading ? <p>Loading...</p> : null}
    {!loading && filteredPokemons && filteredPokemons.length ? <ul>{filteredPokemons.map((pokemon, index) => <Card key={pokemon.name + index} {...pokemon} />)}</ul> : null}
  </>
};

export default List;
