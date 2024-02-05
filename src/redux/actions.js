export const addToFavorite = (payload) => ({
    type: 'ADD_TO_FAVORITE',
    payload: payload
});

export const removeFromFavorite = (payload) => ({
    type: 'REMOVE_FROM_FAVORITE',
    payload: payload
});

export const updateRecipe = (payload) => ({
    type: 'UPDATE_RECIPE',
    payload: payload
});

export const cancelUpdateRecipe = () => ({
    type: 'CANCEL_UPDATE_RECIPE',
});

