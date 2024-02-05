import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/header/Header';
import { useContext} from 'react';
import { UserPreferencesContext } from './context/UserPreferencesContext';

import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import PrivateRoute from './services/PrivateRoute';
import HomePage from './pages/HomePage/HomePage';
import RecipeListPage from './pages/RecipeListPage/RecipeListPage';
import AddRecipePage from './pages/AddRecipePage/AddRecipePage';
import NoPage from './pages/NoPage/NoPage';
import LoginPage from './pages/LoginPage/LoginPage';
import MyProfilePage from './pages/MyProfilePage/MyProfilePage';
import EditRecipePage from './pages/EditRecipePage/EditRecipePage';


function App() {

  const {theme} = useContext(UserPreferencesContext)

  return (

    <Router>
      <div className={`App ${theme}`}>
        <Header/>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/recipe-list" element={<RecipeListPage />} />
            <Route path="/add-recipe" element={<PrivateRoute element= {<AddRecipePage />} />} />
            <Route path="/edit-recipe" element={<PrivateRoute element={<EditRecipePage />} />} />
            <Route path="/my-profile" element={<PrivateRoute element={<MyProfilePage />} />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
          <Footer/>
      </div>
    </Router>
  )
}

export default App










// İçinde default yazanlar: 
  // return (
    // <>
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>
  // )