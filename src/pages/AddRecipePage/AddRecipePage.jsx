
import styles from './AddRecipePage.module.css'

import AddRecipe from '../../components/AddRecipe/AddRecipe'

const AddRecipePage = () => {

    return (
        <>
        <main className={styles['main']} id="main">
            <section className={styles['main-section']}>
                <h1>Share your recipe with everyone from all around the world!</h1>
                <h4>Just one last step: Carefully fill in the blanks ^^</h4>
            </section>
        </main>
        <section className={styles['add-recipe-section']}>
            <AddRecipe />
        </section>
        </>
    )
}

export default AddRecipePage