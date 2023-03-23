import './SearchBar.css';
import { useState } from 'react';

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
                <div><input type="text"
                    className="bar"
                    value={city}
                    onChange={(e) => setCity(e.currentTarget.value)}
                    placeholder="Search location"
                    name="search" />
                    <button
                        type="submit"
                        className="submit"
                    >Search</button>
                </div>
            </form>
        </div>

    )
}

export default SearchBar;