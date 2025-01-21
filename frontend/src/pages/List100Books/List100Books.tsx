import * as React from "react";
import Menu from "../../components/Menu/Menu";
// @ts-ignore
import styles from './List100Books.module.css';

const List100Books = () => {

    return (
        <>
            <Menu />
            <main className={styles.main}>
                <p>
                    Prochainement ici la liste des 100 livres à lire
                </p>
            </main>
        </>

    );
}

export default List100Books;