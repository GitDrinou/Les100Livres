import Menu from "../../components/Menu/Menu";
import * as React from "react";
// @ts-ignore
import styles from "./UpdateABook.module.css";

const UpdateABook = () => {
    // const url = "http://localhost:8080/books/" + param.bookId;
    // let apiMethod = "GET";


    return (
        <>
            <Menu />
            <main className={styles["form-container"]}>
                <h1>Modifier un livre </h1>

            </main>
        </>
    )
}

export default UpdateABook;