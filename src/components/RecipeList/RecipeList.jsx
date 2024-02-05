/* eslint-disable react/prop-types */
import { useContext } from "react";
import styles from './RecipeList.module.css'
import { APIContext } from "../../context/APIContext";
import RecipeCard from "../RecipeCard/RecipeCard";

const RecipeList = ({length}) => {

  const {recipes, isLoading} = useContext(APIContext);

  // // Durstenfeld shuffle algorithm
  // // Ana sayfada ve recipeler tarafında sıralamada randomluk kazanmak adına... - entegre etmek istediğim şekilde edemedim, sonra bakılacak...
  // const shuffleRecipes = (array) => {
  //   for (var i = array.length - 1; i > 0; i--) {
  //       var j = Math.floor(Math.random() * (i + 1));
  //       var temp = array[i];
  //       array[i] = array[j];
  //       array[j] = temp;
  //   }
  // }

  // shuffleRecipes(recipes);

  return (
    <>
    <section className={styles["recipe-list-section"]}>
        {isLoading.read && <h1>LOADING RECIPES...</h1>}
        <article className={styles["recipe-list-article"]}>
          {recipes.slice(0,length).map((recipe)=> (
            <RecipeCard key={recipe.id} recipe={recipe}/>
          ))}
        </article>
    </section>
    </>
  );
};

export default RecipeList

