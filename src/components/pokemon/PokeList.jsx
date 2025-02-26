import '../../styles/components/pokemon/PokeList.css';
import { useEffect, useState } from 'react';
import pokeApi from '../../services/pokeApi';

export default function PokeList({ searchTerm }) {
    const [pokemon, setPokemon] = useState([]);
    const [allPokemon, setAllPokemon] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const ITEMS_PER_PAGE = 9;

    // Add console.log to debug
    console.log('PokeList render - searchTerm:', searchTerm);

    useEffect(() => {
        const fetchPokemon = async () => {
            const response = await pokeApi.getPokemonsList({ limit: 151 });
            setAllPokemon(response.results);
            setPokemon(response.results.slice(0, ITEMS_PER_PAGE));
        };
        fetchPokemon();
    }, []);

    useEffect(() => {
        console.log('Filtering pokemon with searchTerm:', searchTerm);
        const filteredPokemon = allPokemon.filter(poke => 
            poke.name.toLowerCase().startsWith(searchTerm?.toLowerCase() || '')
        );
        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        const endIndex = startIndex + ITEMS_PER_PAGE;
        setPokemon(filteredPokemon.slice(startIndex, endIndex));
    }, [searchTerm, allPokemon, currentPage]);

    const handlePrevPage = () => {
        setCurrentPage(prev => Math.max(prev - 1, 1));
    };

    const handleNextPage = () => {
        const filteredPokemon = allPokemon.filter(poke => 
            poke.name.toLowerCase().includes(searchTerm?.toLowerCase() || '')
        );
        const maxPage = Math.ceil(filteredPokemon.length / ITEMS_PER_PAGE);
        setCurrentPage(prev => Math.min(prev + 1, maxPage));
    };

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
                <div className="poke-list__navigation">
                    <button 
                        onClick={handlePrevPage} 
                        disabled={currentPage === 1}
                        className="nav-button prev-button"
                    >
                        Previous
                    </button>
                    <span className="page-indicator">Page {currentPage}</span>
                    <button 
                        onClick={handleNextPage}
                        disabled={currentPage * ITEMS_PER_PAGE >= allPokemon.filter(poke => 
                            poke.name.toLowerCase().includes(searchTerm?.toLowerCase() || '')
                        ).length}
                        className="nav-button next-button"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    )
}
