import { AuthContext } from "../context/authContext";
import { useContext } from "react";

export const useAuthContext = () => {
    const context = useContext(AuthContext);

    if(!context) {
        throw Error ('Must be used inside AuthContextProvider at index.js')
    }

    return context;
};