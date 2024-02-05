export const recipeReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_FAVORITE':
            return {...state, favoriteRecipes: [...state.favoriteRecipes,{...action.payload}]}

        case 'REMOVE_FROM_FAVORITE':
            return {...state, favoriteRecipes: state.favoriteRecipes.filter((product) => product.id !== action.payload.id)}

        case 'UPDATE_RECIPE':
            return {...state, updateRecipe: {...state.updateRecipe, ...action.payload}};

        case 'CANCEL_UPDATE_RECIPE':
            return {...state, updateRecipe: {}};

        default:
            return state;
    }
};