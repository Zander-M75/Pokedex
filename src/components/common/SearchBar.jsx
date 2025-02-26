import '../../styles/components/common/SearchBar.css';

export default function SearchBar({ onSearchChange }) {
    const handleChange = (e) => {
        console.log('SearchBar input value:', e.target.value);
        onSearchChange(e.target.value);
    };

    return (
        <div className="search-bar-container">
            <input 
                type="text" 
                placeholder="Search" 
                className="search-bar-input"
                onChange={handleChange}
            />
        </div>
    )
}