import { FiTrash2 } from "react-icons/fi"
import "./TopCity.css"

const TopCity = ({city}) => {

    const iconStyle = { "font-size": "1.2em" }

    return (
            <div className="cities-container">
                    <div className="cities">
                        <p>{city}</p>
                        <button className="delete"><FiTrash2 style={iconStyle} /></button>
                    </div>
            </div>
    )
}

export default TopCity;