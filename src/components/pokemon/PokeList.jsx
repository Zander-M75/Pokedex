import '../../styles/components/pokemon/PokeList.css';
import { useEffect, useState } from 'react';
import pokeApi from '../../services/pokeApi';

export default function PokeList() {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        const fetchPokemon = async () => {
            const response = await pokeApi.getPokemonsList({ limit: 151 });
            setPokemon(response.results.slice(0, 9));
        };
        fetchPokemon();
    }, []);

    return (
        <div className="poke-list">
            <div className="poke-list__header">
                <h2>PokeList</h2>
            </div>
            <div className="poke-list__screen">
                <div className="poke-list-container">
                    {pokemon.map((poke) => (
                        <div key={poke.name} className="poke-list-item">
                            <img 
                                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke.url.split('/')[6]}.png`}
                                alt={poke.name}
                            />
                            <span className="pokemon-name">
                                {poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
