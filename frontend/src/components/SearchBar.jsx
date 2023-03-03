import './SearchBar.css';
import {WiDayLightWind} from "react-icons/wi"

const SearchBar = () => {

    const handleChange = async(e) => {
        e.preventDefault();
        console.log('ClickButtonTest');
    }

    return (
        <header>
            <div className="search-container">
                <form>
                    <input type="text" placeholder="Search..." name="search" />
                        <button type="submit" className="submit" onClick={ handleChange }>< WiDayLightWind /></button>
                </form>
            </div>
        </header>
    )
}

export default SearchBar;