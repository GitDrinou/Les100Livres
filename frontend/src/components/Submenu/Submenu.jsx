import * as React from "react";
import styles from "./Submenu.module.css";

const Submenu = () => {
    return (
        <div className={styles.submenu}>
                <a className={styles["button-link"]} href={"/add-book"}>Ajouter un livre</a>
        </div>
    )
}

export default Submenu;