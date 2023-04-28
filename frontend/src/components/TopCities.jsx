import { FiTrash2 } from "react-icons/fi"
import "./TopCities.css"

const TopCities = () => {

    const iconStyle = { "font-size": "1.2em" }

    const cities = [
        {
            id: 1,
            title: 'Tokio'
        },
        {
            id: 2,
            title: 'Spišská Nová Ves'
        },
        {
            id: 2,
            title: 'Berlin'
        }
    ]

    return (
            <div className="cities-container">
                {cities.map((city, index) => (
                    <div key={index} className="cities">
                        <p>{city.title}</p>
                        <button className="delete"><FiTrash2 style={iconStyle} /></button>
                    </div>
                ))}
            </div>
    )
}

export default TopCities;