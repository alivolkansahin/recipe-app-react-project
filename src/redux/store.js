import { recipeReducer } from "./reducers"
import { configureStore } from "@reduxjs/toolkit";

const defaultState = {
    favoriteRecipes: [],
    updateRecipe: {}
}

export const store = configureStore({
    reducer: recipeReducer,
    preloadedState: defaultState
})
