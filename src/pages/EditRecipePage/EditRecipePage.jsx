
import styles from './EditRecipePage.module.css'

import EditRecipe from '../../components/EditRecipe/EditRecipe'

const EditRecipePage = () => {

    return (
        <>
        <main className={styles['main']} id="main">
            <section className={styles['main-section']}>
                <h1>Here you can edit selected recipe!</h1>
                <h4>Just one last step: Carefully fill in the blanks ^^</h4>
            </section>
        </main>
        <section className={styles['add-recipe-section']}>
            <EditRecipe />
        </section>
        </>
    )
}

export default EditRecipePage