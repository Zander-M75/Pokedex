import '../../styles/components/common/SearchBar.css';

export default function SearchBar() {
    return (
        <div className="search-bar-container">
            <input 
                type="text" 
                placeholder="Search" 
                className="search-bar-input"
            />
        </div>
    )
}