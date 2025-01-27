import {useState} from "react";
import CallAPI from "../../hooks/CallAPI";
import Menu from "../../components/Menu/Menu";
import * as React from "react";
// @ts-ignore
import styles from "./UpdateBook.module.css";

const UpdateBook = () => {
    //const url = "http://localhost:8080/books";
    //const apiMethod = "POST";
    return (
        <>
            <Menu />
            <main className={styles["form-container"]}>
                <h1>Modifier un livre (bientôt !)</h1>
            </main>
        </>
    )
}

export default UpdateBook;