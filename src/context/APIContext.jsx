import { createContext, useState, useEffect } from "react";
import axios from 'axios';

export const APIContext = createContext();

// eslint-disable-next-line react/prop-types
export const APIContextProvider = ({children}) => {
    const[recipes, setRecipes] = useState([]);

    const[isLoading, setIsLoading] = useState({
        read: false,
        delete: [],
        add: false,
        update: false
    });

    useEffect(() => {
        const getRecipes = async () => {
            try {
            setIsLoading(prevIsLoading => ({...prevIsLoading, read: true}))
            // eslint-disable-next-line no-unused-vars
            const response = await axios.get("http://localhost:3001/recipes")
            .then(res => setRecipes(res.data))
            setIsLoading(prevIsLoading => ({...prevIsLoading, read: false}))
            } catch (error) {
            console.log("There was an error while fetching data", error)
            }
        } 
        getRecipes()
    }, []);

    const addRecipeToList = (newRecipe) => {
        setIsLoading(prevIsLoading => ({...prevIsLoading, add: true}))
        const postRecipe = async () => {
            try {
                const response = await axios.post("http://localhost:3001/recipes", newRecipe)
                setRecipes((previousStateRecipes) => [...previousStateRecipes,response.data]);
            } catch (error) {
                console.log("There was an error while posting new recipe", error);
            }
            setIsLoading(prevIsLoading => ({...prevIsLoading, add: false}))
        };
        postRecipe();
    }

    const updateRecipeFromList = (updatedRecipe) => {
        setIsLoading(prevIsLoading => ({...prevIsLoading, update: true}))
        const updateRecipe = async () => {
            try {
                const response = await axios.put(`http://localhost:3001/recipes/${updatedRecipe.id}`, updatedRecipe)
                setRecipes((previousStateRecipes) => previousStateRecipes.map((recipe) => (
                    recipe.id === updatedRecipe.id ? response.data : recipe
                )));   
            } catch (error) {
                console.log("There was an error while updating new recipe", error);
            }
            setIsLoading(prevIsLoading => ({...prevIsLoading, update: false}))
        };
        updateRecipe();
    }

    const deleteRecipeFromList = async (id) => {
        setIsLoading((prevIsLoading) => ({
            ...prevIsLoading,
            delete: [...prevIsLoading.delete, id],
        }));
        const response = await axios.delete(`http://localhost:3001/recipes/${id}`);
        if (response.status === 200) {
            setRecipes((prevRecipes) =>
            prevRecipes.filter((recipe) => recipe.id !== id)
            );
        }
        setIsLoading((prevIsLoading) => ({
            ...prevIsLoading,
            delete: prevIsLoading.delete.filter((deleteID) => deleteID !== id),
        }));
    };

    return (
        <APIContext.Provider value={{recipes, isLoading, deleteRecipeFromList, addRecipeToList, updateRecipeFromList}}>
            {children}
        </APIContext.Provider>
    )
}










