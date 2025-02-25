// src/services/pokeApi.js
const BASE_URL = 'https://pokeapi.co/api/v2';

const pokeApi = {
    getPokemonsList: async ({ limit = 1010 } = {}) => {
        const response = await fetch(`${BASE_URL}/pokemon?limit=${limit}`);
        const data = await response.json();
        // Sort the results alphabetically
        data.results.sort((a, b) => a.name.localeCompare(b.name));
        return data;
    },
};

export default pokeApi;
