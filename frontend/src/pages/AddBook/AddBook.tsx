import Menu from "../../components/Menu/Menu";
import * as React from "react";
// @ts-ignore
import styles from "./AddBooks.module.css";

const AddBook = () => {
    return (
        <>
            <Menu />
            <main className={styles["form-container"]}>
                <h1>Ajouter un nouveau livre</h1>
                <form>
                    <div className={styles.row}>
                        <div className={styles["col-label"]}>
                            <label htmlFor="title">Titre</label>
                        </div>
                        <div className={styles["col-input"]}>
                            <input id="title" type="text" name="title" placeholder="Ex.: Les Misérables"/>
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles["col-label"]}>
                            <label htmlFor="author">Auteur</label>
                        </div>
                        <div className={styles["col-input"]}>
                            <input id="author" type="text" name="author" placeholder="Ex.: Victor Hugo"/>
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles["col-label"]}>
                            <label htmlFor="publication">Date de publication</label>
                        </div>
                        <div className={styles["col-input"]}>
                            <input id="publication" type="text" name="publication"
                                   placeholder="Ex.: 1930, février 2000, ..."/>
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles["col-label"]}>
                            <label htmlFor="isbn">Code ISBN</label>
                        </div>
                        <div className={styles["col-input"]}>
                            <input id="isbn" type="text" name="isbn" placeholder="Ex.: 9-34567-23456-6"/>
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles["col-label"]}>
                            <label htmlFor="description">Description</label>
                        </div>
                        <div className={styles["col-input"]}>
                            <textarea id="description" name="description"
                                      placeholder="Ex;: résumé de fin de couverture, extrait, ..."></textarea>
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles["col-label"]}>
                            <label htmlFor="isRead">Lu</label>
                        </div>
                        <div className={styles["col-input"]}>
                            <select id="isRead" name="isRead">
                                <option value="no" selected>Non</option>
                                <option value="yes">Oui</option>
                            </select>
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles["col-label"]}></div>
                        <div className={styles["col-inout"]}>
                            <input type="button" value="Effacer" className={styles["button-clear"]}/>
                            <input type="submit" value="Enregistrer"/>
                        </div>
                    </div>
                </form>
            </main>
        </>
    )
}

export default AddBook;