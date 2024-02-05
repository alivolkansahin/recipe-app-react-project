import { useContext, useEffect } from 'react'

import styles from './RecipeListPage.module.css'
import RecipeList from '../../components/RecipeList/RecipeList';
import { APIContext } from '../../context/APIContext';
import { ProductListingContext } from '../../context/ProductListingContext';

export default function RecipeListPage () {

    const {recipes, isLoading} = useContext(APIContext);
    const {length, setLength} = useContext(ProductListingContext);

    // setLength(products.length);
    /* Warning: Cannot update a component (`APIContextProvider`) while rendering a different component (`HomePage`). 
    To locate the bad setState() call inside `HomePage`, follow the stack trace as described in */
    useEffect(()=>{
        setLength(recipes.length);
    },[setLength, recipes.length]);

    return (
        <>
        <main className={styles['main']} id="main">
            <section className={styles['main-section']}>
            {!isLoading.read && (
                <>
                    <h1>Here are all the recipes you can find !</h1>
                    <h4>Don&apos;t forget to share these recipes with your friends ^^</h4>
                </>
            )}
            </section>
        </main>
        <section className={styles['recipe-page-section']}>
            <RecipeList length={length} />
        </section>
        </>
    )
}
  