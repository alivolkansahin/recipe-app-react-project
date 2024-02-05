import { createContext, useState } from "react";

export const UserPreferencesContext = createContext();

// eslint-disable-next-line react/prop-types
export const UserPreferencesProvider = ({children}) => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

    return (
        <UserPreferencesContext.Provider value={{theme, toggleTheme}}> 
            {children}
        </UserPreferencesContext.Provider> 
    )
}