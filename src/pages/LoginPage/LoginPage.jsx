/* eslint-disable react/no-unescaped-entities */

import Login from '../../components/Login/Login'
import styles from './LoginPage.module.css'

export default function LoginPage () {
    return (
    <>
        <main className={styles['main']} id="main">
            <section className={styles['main-section']}>
                <h1>Login To Your Account</h1>
                <h4>To add, remove, edit recipes (You can even add recipes to your favorites! ^^)</h4>
            </section>
        </main>
        <section className={styles['login-section']}>
            <Login />
        </section>
    </>
    )
}