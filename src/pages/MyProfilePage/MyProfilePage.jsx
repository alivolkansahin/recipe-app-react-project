/* eslint-disable react/no-unescaped-entities */

import { useEffect, useState } from 'react';
import styles from './MyProfilePage.module.css'
import axios from 'axios';
import MyProfile from '../../components/MyProfile/MyProfile';

export default function MyProfilePage () {

    const [user, setUser] = useState({});
    const [userName, setUserName] = useState("");

    useEffect(()=>{
      const getUserProfile = async () => {
        await axios.get("https://api.escuelajs.co/api/v1/auth/profile", {
          headers: {
            Authorization: `Bearer ${JSON.parse(localStorage.getItem("user")).access_token}`
          }
        }).then(response => {
          setUser(response.data);
          setUserName(user.name);
        })
      }
      getUserProfile();
    },[user.name]);

    return (
    <>
        <main className={styles['main']} id="main">
            <section className={styles['main-section']}>
                <h1>Welcome {userName}!</h1>
                <h4>You can view your profile details & favorite recipes!</h4>
            </section>
        </main>
        <section className={styles['profile-section']}>
            <MyProfile user={user} />
        </section>
    </>
    )
}