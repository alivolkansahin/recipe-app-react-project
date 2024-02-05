/* eslint-disable react/prop-types */
import styles from './RecipeCard.module.css';

import AddFavoriteIcon from "../../assets/addfavorite.svg";
import RemoveFavoriteIcon from "../../assets/removefavorite.svg";
import EditIcon from "../../assets/edit.svg";
import DeleteIcon from "../../assets/delete.svg";

import { useDispatch, useSelector } from 'react-redux';
import { addToFavorite, removeFromFavorite, updateRecipe } from "../../redux/actions"
import { useContext, useState } from 'react';
import { APIContext } from '../../context/APIContext';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const RecipeCard = ({recipe}) => {

    const dispatch = useDispatch();
    const favoriteRecipes = useSelector(state => state.favoriteRecipes);
    const thisRecipeInFavourite = favoriteRecipes.find(recipeInFavorite => recipeInFavorite.id === recipe.id);
    const [deleteVisible, setDeleteVisible] = useState("");
    const [editVisible, setEditVisible] = useState("");
    const {deleteRecipeFromList, isLoading} = useContext(APIContext);
    const {isAuthenticated} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleAddToFavourite = () => {
        isAuthenticated ? dispatch(addToFavorite(recipe)) : navigate("/login")      
    }
    
    const handleRemoveFromFavourite = () => { // bu method tatmin etmedi sonra bak...
        isAuthenticated ? dispatch(removeFromFavorite(recipe)) : navigate("/login")
    }

    const handleDeleteSpanVisibility = () => {
        deleteVisible === "" ? setDeleteVisible("visible") : setDeleteVisible("");
    }

    const handleEditSpanVisibility = () => {
        editVisible === "" ? setEditVisible("visible") : setEditVisible("");
    }

    const handleDeleteRecipe = (event) => {
        !isAuthenticated ? navigate("/login") : (
            event.preventDefault(),
            deleteRecipeFromList(recipe.id)
        )
    }

    const handleEditRecipe = (event) => { // Private Router ile halledildi zaten.
        event.preventDefault();
        dispatch(updateRecipe(recipe));
        navigate("/edit-recipe");
    }

    return (
        <div className={styles['recipe-card-div']}>
            <div className={styles['recipe-controls-div']}>
                <div className={styles['recipe-edit-div']}>
                    <img src={EditIcon} onMouseEnter={handleEditSpanVisibility} onMouseLeave={handleEditSpanVisibility} onClick={handleEditRecipe}/>
                    <span className={`${styles[editVisible]}`}>{isLoading.delete.some((deletedId) => deletedId === recipe.id) ? "Loading" : "Edit"}</span>
                </div>
                <div className={styles['recipe-delete-div']} >
                    <img src={DeleteIcon} onMouseEnter={handleDeleteSpanVisibility} onMouseLeave={handleDeleteSpanVisibility} onClick={handleDeleteRecipe}/>
                    <span className={`${styles[deleteVisible]}`}>{isLoading.delete.some((deletedId) => deletedId === recipe.id) ? "Loading" : "Delete"}</span>
                </div>
            </div>
            <div className={styles['recipe-image-div']}>
                <img src={recipe.image} />
            </div>
            <div className={styles['recipe-details-div']}>
                <div className={styles['recipe-description-div']}>
                    <p>{recipe.title}</p>
                    <p>{recipe.description}</p>
                </div>
                <div className={styles['recipe-difficulty-div']}>
                    <p>Difficulty: {recipe.difficulty}</p>
                    <div className={styles['button-div']}>
                        {!thisRecipeInFavourite ? (   
                        <div className={styles['add-to-fav-div']}onClick={handleAddToFavourite}>
                            <span className={styles['fav-span']}>Favorite</span>   
                            <img src={AddFavoriteIcon}></img>
                        </div>)
                        : (
                        <div className={styles['remove-from-fav-div']}onClick={handleRemoveFromFavourite}>
                            <span className={styles['fav-span']}>Favorited</span>
                            <img src={RemoveFavoriteIcon}></img>
                        </div>
                        )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecipeCard