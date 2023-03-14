import './SearchBar.css';
import { useState } from 'react';

const apiKey = '9139bc6d00ad8fa87da75f7489652eef';

const SearchBar = ({ setQuery }) => {

    const [city, setCity] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (city !== '') {
            setQuery({ q: city });
        }
        setCity("");
    }

    return (
        <div>
            <form className='searchbar' onSubmit={handleSubmit}>
                <input type="text"
                    className="bar"
                    value={city}
                    onChange={(e) => setCity(e.currentTarget.value)}
                    placeholder="Search location"
                    name="search" />
                <button
                    type="submit"
                    className="submit"
                    >Search</button>
            </form>
        </div>

    )
}

export default SearchBar;