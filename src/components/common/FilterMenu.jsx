
import SearchBar from './SearchBar';
import '../../styles/components/common/FilterMenu.css';

export default function FilterMenu() {
    return (
        <div className="filter-menu">
            <h2 className="filter-menu__title">Filter Menu</h2>
            <div className="filter-menu__search-bar">
                <SearchBar />
            </div>
            <div className="filter-menu__content">
                <h3 className="filter-menu__subtitle">Filter by</h3>
                <div className="filter-menu__category">
                    <h4 className="filter-menu__category-title">Category</h4>
                    <ul className="filter-menu__list">
                        <li className="filter-menu__item">All</li>
                        <li className="filter-menu__item">Category 1</li>
                        <li className="filter-menu__item">Category 2</li>
                        <li className="filter-menu__item">Category 3</li>
                    </ul>
                </div>
            </div>
        </div>
        
    
    )
}

