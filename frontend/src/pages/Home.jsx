import SearchBar from '../components/SearchBar'
import Video from '../components/Video'
import TopCities from '../components/TopCities'
import CurrentDate from '../components/CurrentDate'
import Divider from '../components/Divider'
import "./Home.css"

const Home = () => {
    return (
        <div className='search-container'>
            <TopCities />
            <SearchBar />
            <Divider />
            <CurrentDate />
            <Video />
        </div>
    )
}

export default Home;