const getPokemonApi = (idOrName) => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${idOrName}`)
};

export default getPokemonApi;

