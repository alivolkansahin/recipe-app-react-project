import { useContext, useState } from 'react'
import styles from './AddRecipe.module.css'
import { APIContext } from '../../context/APIContext';

const AddRecipe = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [isAddingSuccessful, setIsAddingSuccessful] = useState(false);

    const [errorBox, setErrorBox] = useState({
        title: false,
        description: false,
        image: false,
        difficulty: false
    });

    const {addRecipeToList, isLoading} = useContext(APIContext);


    const handleSubmit = (event) => {
        event.preventDefault();
        if(title.trim() && description.trim() && image.trim() && (difficulty.trim() && (difficulty.trim()==='Easy' || difficulty.trim()==='Mid' || difficulty.trim()==='Hard'))){
            const data = {
                title: title.trim(), 
                description: description.trim(), 
                image: image.trim(),
                difficulty: difficulty.trim()
                };
            addRecipeToList(data);
            setTitle("");
            setDescription("");
            setImage("");
            setDifficulty("");
            setIsAddingSuccessful(true);
        } else {
            setIsAddingSuccessful(false);
        }
        // Else içinde olunca hata üstüne düzeltmelerle doğru yapsak ve recipe eklense bile hata mesajları ekranda görünür kalıyordu!
        setErrorBox({
            title: !title.trim(),
            description: !description.trim(),
            image: !image.trim(),        
            difficulty: !difficulty.trim() || !(difficulty.trim()==='Easy' || difficulty.trim()==='Mid' || difficulty.trim()==='Hard'),        
        });
    }

    return (
        <form className ={styles['new-recipe-form']} onSubmit={handleSubmit}>
            <div className={styles['form-control']}>
                <input onChange = {(event) => setImage(event.target.value)} value={image} type="text" placeholder='Image URL' />
                {errorBox.image && <p className={styles['input-err']}>Image URL cannot be empty!</p>}
            </div>
            <div className={styles['form-control']}>
                <input onChange = {(event) => setTitle(event.target.value)} value={title} type="text" placeholder='Recipe Title (max 25 characters)' maxLength="25"/>
                {errorBox.title && <p className={styles['input-err']}>Recipe Title cannot be empty!</p>}    
            </div>
            <div className={styles['form-control']}>
                <textarea onChange = {(event) => setDescription(event.target.value)} value={description} placeholder='Recipe Description (max 185 characters)' maxLength="185"></textarea>
                {errorBox.description && <p className={styles['input-err']}>Recipe Description cannot be empty!</p>}
            </div>
            <div className={styles['form-control']}>
                <input onChange = {(event) => setDifficulty(event.target.value)} value={difficulty} type="text" placeholder="Difficulty ( Type 'Easy' or 'Mid' or 'Hard')" />
                {errorBox.difficulty && <p className={styles['input-err']}>Difficulty is either empty or not entered correctly!</p>}
            </div>
            <button type='submit'>{isLoading.add ? "Loading" : "Add Recipe"}</button>
            {isAddingSuccessful ? <span>ADDING RECIPE SUCCESSFUL !</span> : ""}
        </form>
    )
}

export default AddRecipe