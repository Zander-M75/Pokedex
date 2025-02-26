import SearchBar from './SearchBar';
import '../../styles/components/common/FilterMenu.css';
import { useState, useEffect } from 'react';

export default function FilterMenu({ onSearchChange }) {
    const [types, setTypes] = useState([]);
    const [generations, setGenerations] = useState([]);

    useEffect(() => {
        // Fetch Pokemon types
        fetch('https://pokeapi.co/api/v2/type')
            .then(response => response.json())
            .then(data => {
                // Filter out 'unknown' and 'shadow' types as they're not main types
                const mainTypes = data.results.filter(type => 
                    type.name !== 'unknown' && type.name !== 'shadow'
                );
                setTypes(mainTypes);
            });

        // Fetch generations
        fetch('https://pokeapi.co/api/v2/generation')
            .then(response => response.json())
            .then(data => setGenerations(data.results));
    }, []);

    return (
        <div className="filter-menu">
            <h2 className="filter-menu__title">Filter Menu</h2>
            <div className="filter-menu__search-bar">
                <SearchBar onSearchChange={onSearchChange} />
            </div>
            <div className="filter-menu__content">
                <h3 className="filter-menu__subtitle">Filter by</h3>
                <select className="filter-menu__select">
                    <option value="">Select Type</option>
                    {types.map(type => (
                        <option key={type.name} value={type.name}>
                            {type.name.charAt(0).toUpperCase() + type.name.slice(1)}
                        </option>
                    ))}
                </select>
                <select className="filter-menu__select">
                    <option value="">Select Generation</option>
                    {generations.map((gen, index) => (
                        <option key={gen.name} value={index + 1}>
                            Generation {index + 1}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}

