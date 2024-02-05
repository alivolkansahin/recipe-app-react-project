/* eslint-disable react/prop-types */

import { useSelector } from 'react-redux'
import styles from './MyProfile.module.css'
import RecipeCard from '../RecipeCard/RecipeCard';
import { useEffect, useState } from 'react';

const MyProfile = ({user}) => {

  const favoriteRecipes = useSelector(state => state.favoriteRecipes);
  const [haveFavoriteRecipes, setHaveFavoriteRecipes] = useState(false);

  useEffect(()=>{
    favoriteRecipes.length>0 ? setHaveFavoriteRecipes(true) : setHaveFavoriteRecipes(false)
  },[favoriteRecipes]);

  return (
    <>
    <article className ={styles["my-profile"]}>
      <div className={styles["profile-details"]}>
        <div className={styles["profile-avatar"]}> 
          <img src={user.avatar} alt={user.name} />
        </div>
        <div className={styles["profile-info"]}>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Role:</strong> {user.role}</p>
        </div>
      </div>
    </article>
    <article className = {styles['fav-recipe-message']}>{haveFavoriteRecipes ? <h1>Your Favorite Recipes :)</h1> : <h1>You have not added any recipe to your favorites :(</h1>}
    </article>
    <article className={styles["favorite-recipes"]}>
        {favoriteRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe}/>
        ))}
    </article>
    </>
  )
}

export default MyProfile