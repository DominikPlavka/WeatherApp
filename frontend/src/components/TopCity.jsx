import { FiTrash2 } from "react-icons/fi"
import "./TopCity.css"
import { useAuthContext } from "../hooks/useAuthContext"
import { useCitiesContext } from "../hooks/useCitiesContext"

const TopCity = ({ city }) => {

    const { user } = useAuthContext()
    const { dispatch } = useCitiesContext();

    console.log(city._id)

    const iconStyle = { "fontSize": "1.2em" };

    const handleClick = () => {

        if (!user) {
            return;
        }

        const deleteCity = async () => {

            const response = await fetch('/api/city/' + city._id,
                {
                    method: "DELETE",
                    headers: {
                        Authorization: `Bearer ${user.token} `
                    }
                })

            if (!response.ok) {
                throw new Error('There was a problem with data')
            }

            const deletedCity = await response.json();

            dispatch({ type: "DELETE_CITY", payload: deletedCity })
        }

        deleteCity();
    }

    return (
        <div className="cities-container">
            <div className="cities">
                <p>{city.city}</p>
                <button className="delete"><FiTrash2 style={iconStyle} onClick={handleClick} /></button>
            </div>
        </div>
    )
}

export default TopCity;