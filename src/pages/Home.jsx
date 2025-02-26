import { useState } from 'react';
import FilterMenu from '../components/common/FilterMenu';
import PokeList from '../components/pokemon/PokeList';
import PokeCard from '../components/pokemon/PokeCard';
import '../styles/pages/Home.css';

export default function Home() {
    const [searchTerm, setSearchTerm] = useState('');

    console.log('Home render - searchTerm:', searchTerm);

    return (
        <div className="home">
            <div className="home__container">
                <FilterMenu onSearchChange={setSearchTerm} />
                <PokeList searchTerm={searchTerm} />
                <PokeCard />
            </div>
        </div>
    )
}