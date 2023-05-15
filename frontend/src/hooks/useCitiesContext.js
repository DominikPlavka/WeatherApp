import { useContext } from "react"
import { CitiesContext } from "../context/CitiesContext"

export const useCitiesContext = () => {
    const context = useContext(CitiesContext);

    if (!context) {
        throw new Error('useCitiesContext must be used inside CitiesContextProvider component')
    }

    return context;
}