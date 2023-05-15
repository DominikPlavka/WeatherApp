import { FiTrash2 } from "react-icons/fi"
import "./TopCity.css"
import { useAuthContext } from "../hooks/useAuthContext"
import { useCitiesContext } from "../hooks/useCitiesContext"

const TopCity = ({ city, setQuery, setError }) => {

    const { user } = useAuthContext()
    const { dispatch } = useCitiesContext();

    const iconStyle = { "fontSize": "1.2em" };

    const handleClick = async () => {

        const response = await fetch(process.env.REACT_APP_URL + '/api/city/' + city._id,
            {
                method: "DELETE",
                headers: {
                    "Authorization": `Bearer ${user.token}`
                }
            })

        if (!response.ok) {
            throw new Error('There was a problem with data')
        }

        const deletedCity = await response.json();

        dispatch({ type: "DELETE_CITY", payload: deletedCity })

        setError(null);
    }

    return (
        <div className="cities-container">
            <div className="cities">
                <button className="city button-style" onClick={() => setQuery({ q: city.city })}>{city.city}</button>
                <button className="button-style"><FiTrash2 style={iconStyle} onClick={handleClick} /></button>
            </div>
        </div>
    )
}

export default TopCity;