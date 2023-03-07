import "./TopCities.css"

const TopCities = () => {
    
    const cities = [
        {
            id: 1,
            title: 'SNA'
        },
        {
            id: 2,
            title: 'SNB'
        },
        {
            id: 3,
            title: 'SNV'
        }
    ]

    return (
        <div className="cities-container">
            {cities.map((city) => (
                <p className="cities" key={city.id}>{city.title}</p>
            ))}
        </div>
    )
}

export default TopCities;