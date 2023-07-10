import React, { useState } from "react";
import Search from "../Search/Search";
import List from "../List/List";
import useDebounce from "../../hooks/useDebounce";

const Pokemons = () => {
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search);
  return <>
    <Search setSearch={setSearch} />
    <List search={debouncedSearch} />
  </>
};

export default Pokemons;
