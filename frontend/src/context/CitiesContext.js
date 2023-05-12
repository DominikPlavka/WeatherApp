import { createContext, useReducer } from "react"

export const CitiesContext = createContext();

export const citiesReducer = (state, action) => {
    switch (action.type) {
        case 'GET_CITIES':
            return {
                cities: action.payload
            }
        case 'ADD_CITY':
            return {
                cities: [action.payload, ...state.cities]
            }
        default:
            return state
    }
};

export const CitiesContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(citiesReducer, {
        cities: null
    });

    //console.log(state)

    return (
        <CitiesContext.Provider value={{...state, dispatch}}>
            { children }
        </CitiesContext.Provider>
    )
}