const getPokemonsApi = (searchTerm = '') => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm}?limit=151`)
};

export default getPokemonsApi;

