import * as React from "react";
import Menu from "../../components/Menu/Menu";
import Submenu from "../../components/Submenu/Submenu";
// @ts-ignore
import styles from "./Admin.module.css";

const Admin = () => {
    return (
        <>
            <Menu />
            <div className={styles.App}>
                <h1>Administration</h1>
                <main className={styles["App-main"]}>
                    <a className={styles["button-link"]} href={"/add-book"}>Ajouter un autre livre</a>
                </main>
            </div>
        </>
    )
}

export default Admin;