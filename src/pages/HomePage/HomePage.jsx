import { useContext, useEffect } from 'react'
import SliderBar from '../../components/SliderBar/SliderBar'
import styles from './HomePage.module.css'
import { APIContext } from '../../context/APIContext'
import { ProductListingContext } from '../../context/ProductListingContext'
import RecipeList from '../../components/RecipeList/RecipeList'

const HomePage = () => {

    const {isLoading} = useContext(APIContext);
    const {length, setLength} = useContext(ProductListingContext);

    useEffect(()=>{
        setLength(6);
    }, [setLength]);
    
    return (
        <>
        <main className={styles['main']} id="main">
            <section className={styles['main-section']}>
                <h1>Welcome to the Recipe Sharing Platform</h1>
                <h4>Find and share the best recipes from around the world!</h4>
            <SliderBar/>
            </section>
        </main>
        <section className={styles['home-section']}>
            {!isLoading.read && <h2>Recipes you might be interested in...</h2>}
            <RecipeList length={length} />
        </section>
        </>
    )
}

export default HomePage