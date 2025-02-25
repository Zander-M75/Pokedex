// src/services/pokeApi.js
const BASE_URL = 'https://pokeapi.co/api/v2';

const pokeApi = {
    getPokemonsList: async ({ limit = 151 } = {}) => {
        const response = await fetch(`${BASE_URL}/pokemon?limit=${limit}`);
        return response.json();
    },
};

export default pokeApi;
