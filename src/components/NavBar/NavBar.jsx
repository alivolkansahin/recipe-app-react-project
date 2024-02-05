import {Link, useNavigate} from 'react-router-dom' 
import LoginIcon from '../../assets/login.svg'
import LogoutIcon from '../../assets/logout.svg'
import { AuthContext } from '../../context/AuthContext';

import styles from './NavBar.module.css'
import { useContext } from 'react';
import { UserPreferencesContext } from '../../context/UserPreferencesContext';

const NavBar = () => {
    const {logout, isAuthenticated} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/login");
    }

    const handleLogout = () => {
        logout();
        navigate("/login");
    }

    const ThemeSlider = () => {
        const {theme, toggleTheme} = useContext(UserPreferencesContext);

        return(
        <div onClick={toggleTheme} className={`${styles['slider-container']} ${styles[theme]}`}>
            <span>{theme}</span>
            <div className={styles["slider-button"]}></div>
        </div>
        )
    }

    return (
    <>
    <nav className={styles['navbar']}>
        <div className={styles['top-left-bar']}>
            <Link to="/">Home</Link>
            <Link to="/recipe-list">All Recipes</Link>
            <Link to="/add-recipe">Add New Recipe</Link>
        </div>
        <div>
            <h1>V-RECIPES</h1>
        </div>
        <div className={styles['top-right-bar']}>
            <Link to="/my-profile">My Profile</Link>
            <ThemeSlider />
            <a className={styles['log-button']}>
            <div className={styles['log-actions-div']} onClick={isAuthenticated ? handleLogout : handleLogin}>     
                <span>{isAuthenticated ? "Logout" : "Login"}</span>
                <div>
                    <img src={isAuthenticated ? LogoutIcon : LoginIcon}></img>
                </div> 
            </div>
            </a>
        </div>
    </nav>
    </>
    )
}

export default NavBar