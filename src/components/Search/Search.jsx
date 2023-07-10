import React, { useState } from "react";
import './Search.css'

const Search = ({ setSearch }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
    setSearch(e.target.value);
  }

  return <>
    <form>
      <input className="input" type="text" placeholder="Write a pokemon" value={inputValue} onChange={handleChange} />
    </form>
  </>
};

export default Search;
