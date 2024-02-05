import { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext';
import {useNavigate} from 'react-router-dom';

import styles from './Login.module.css'

const Login = () => {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [errorBox, setErrorBox] = useState({
      username: false,
      password: false,
    });

    const {login} = useContext(AuthContext);
    const navigate = useNavigate();
    
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
          await login(username, password);
          navigate("/");
        } catch (error) {
          alert("Login failed");  
        }    
        setErrorBox({
            username: username,
            password: password,      
        });
        setUsername("");
        setPassword("");
    };
  return (
    <form className ={styles['new-recipe-form']} onSubmit={handleLogin}>
      <div className={styles['form-control']}>
          <input type="text" placeholder='username (john@mail.com)' value={username} onChange={(e)=>setUsername(e.target.value)} />
          {errorBox.username && <p className={styles['input-err']}>Wrong Username!</p>}
      </div>
      <div className={styles['form-control']}>
          <input type="password" placeholder='password (changeme)' value={password} onChange={(e)=>setPassword(e.target.value)} />
          {errorBox.password && <p className={styles['input-err']}>Wrong Password!</p>}    
      </div>
      <button type='submit'>Login</button>
    </form>
  )
}

export default Login