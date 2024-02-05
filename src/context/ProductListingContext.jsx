import { createContext, useState } from "react";

export const ProductListingContext = createContext();

// eslint-disable-next-line react/prop-types
export const ProductListingContextProvider = ({children}) => {

    const[length, setLength] = useState(30);

    return (
        <ProductListingContext.Provider value={{length, setLength}}>
            {children}
        </ProductListingContext.Provider>
    )
}