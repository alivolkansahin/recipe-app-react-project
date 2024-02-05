import { useContext, useState } from 'react'
import styles from './EditRecipe.module.css'
import { APIContext } from '../../context/APIContext';
import { useDispatch, useSelector } from 'react-redux';
import RecipeCard from '../RecipeCard/RecipeCard';
import { cancelUpdateRecipe } from '../../redux/actions';
import { useNavigate } from 'react-router-dom';

const EditRecipe = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const selectedRecipeForEdit = useSelector(state => state.updateRecipe);
    const [title, setTitle] = useState(selectedRecipeForEdit.title);
    const [description, setDescription] = useState(selectedRecipeForEdit.description);
    const [image, setImage] = useState(selectedRecipeForEdit.image);
    const [difficulty, setDifficulty] = useState(selectedRecipeForEdit.difficulty);
    const [isUpdateSuccessful, setIsUpdateSuccessful] = useState(false);

    const [errorBox, setErrorBox] = useState({
        title: false,
        description: false,
        image: false,
        difficulty: false
    });

    const {updateRecipeFromList, isLoading} = useContext(APIContext);


    const handleSubmit = (event) => {
        event.preventDefault();
        if(title.trim() && description.trim() && image.trim() && (difficulty.trim() && (difficulty.trim()==='Easy' || difficulty.trim()==='Mid' || difficulty.trim()==='Hard'))){
            const data = {
                id: selectedRecipeForEdit.id,
                title: title.trim(), 
                description: description.trim(), 
                image: image.trim(),
                difficulty: difficulty.trim()
                };
            updateRecipeFromList(data);
            setTitle("");
            setDescription("");
            setImage("");
            setDifficulty("");
            setIsUpdateSuccessful(true);
        } else {
            setIsUpdateSuccessful(false);
        }
        // Else olunca hata üstüne düzeltmelerle doğru yapsak ve recipe eklense bile hata mesajları ekranda görünür kalıyordu!
        setErrorBox({
            title: !title.trim(),
            description: !description.trim(),
            image: !image.trim(),        
            difficulty: !difficulty.trim() || !(difficulty.trim()==='Easy' || difficulty.trim()==='Mid' || difficulty.trim()==='Hard'),        
        });
    }

    const handleCancelButton = () => {
        dispatch(cancelUpdateRecipe());
        navigate("/");
    }

    return (
        <form className ={styles['new-recipe-form']} onSubmit={handleSubmit}>
        <div>
            <RecipeCard recipe={selectedRecipeForEdit} />
        </div>
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
            <div className={styles['edit-buttons-div']}>
                <button type='submit'>{isLoading.update ? "Loading" : "Update Recipe"}</button>
                <button type='button' onClick={handleCancelButton}>Cancel</button>
            </div>
            {isUpdateSuccessful ? <span>UPDATE SUCCESSFUL !</span> : ""}
        </form>
    )
}

export default EditRecipe