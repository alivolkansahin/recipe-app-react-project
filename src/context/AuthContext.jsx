import { createContext, useState } from "react";
import AuthServices from "../services/AuthServices";

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthContextProvider = ({children}) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = async (username, password) => {
        try {
            const resData = await AuthServices.loginService(username, password);
            if(resData.access_token){
                setIsAuthenticated(AuthServices.getCurrentUser());
            }     
        } catch (error) {
            setIsAuthenticated(false); 
            throw new Error(error);
        }
    };

    const logout = () => {
        AuthServices.logoutService();
        setIsAuthenticated(false);
    }

    return (
        <AuthContext.Provider value={{isAuthenticated, login, logout}}>
            {children}
        </AuthContext.Provider>
    )

}