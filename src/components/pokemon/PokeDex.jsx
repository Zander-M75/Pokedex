import { useState } from 'react';
import FilterMenu from '../common/FilterMenu';
import PokeList from './PokeList';
import '../../styles/components/pokemon/PokeDex.css';

export default function PokeDex() {
    const [searchTerm, setSearchTerm] = useState('');

    console.log('PokeDex render - searchTerm:', searchTerm);

    return (
        <div className="pokedex">
            <FilterMenu onSearchChange={setSearchTerm} />
            <PokeList searchTerm={searchTerm} />
        </div>
    );
} 