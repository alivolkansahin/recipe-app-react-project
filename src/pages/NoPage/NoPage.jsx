/* eslint-disable react/no-unescaped-entities */

import styles from './NoPage.module.css'

export default function NoPage () {
    return (
    <main>
        <section className={styles['no-page']}>
            <h1>404 Not Found</h1>
            <h2>We couldn't find the page you're looking for!</h2>
        </section>
    </main>
    )
}