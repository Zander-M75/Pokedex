
import FilterMenu from '../components/common/FilterMenu';
import PokeList from '../components/pokemon/PokeList';
import PokeCard from '../components/pokemon/PokeCard';
import '../styles/pages/Home.css';
export default function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <FilterMenu />
                <PokeList />
                <PokeCard />
            </div>
        </div>
    )
}