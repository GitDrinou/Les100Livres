import Menu from "../../components/Menu/Menu";
import * as React from "react";
// @ts-ignore
import styles from "./AddBooks.module.css";
import { useState } from "react";
import CallAPI from "../../hooks/CallAPI";
import {useNavigate} from "react-router-dom";
import ActionButton from "../../components/ActionButton/ActionButton";
import {Book} from "../../types/Types";

const AddBook = () => {
    const url = "http://localhost:8080/books";
    const apiMethod = "POST";
    const navigate = useNavigate();

    const initialData = {
        title: "",
        author: "",
        publicationDate: "",
        isbn: "",
        description: "",
        type100: "0",
        isRead: "1"
    }

    //const [formData, setFormData] = useState(initialData);
    const [data, setData] = useState<Book>(initialData);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false)


    const handleChange = (event: any) => {
        const {name, value} = event.target;
        setData({
            ...data,
            [name]: value,
        })
    }

    const handleSubmit = (event: { preventDefault: () => void; }) => {
       event.preventDefault();
       CallAPI({url, apiMethod, body: data, setData, setLoading, setError});
        if (!loading || !error) {
           document.location.href="/other-books";
       }
    }

    const handleClear = () => {
        setData(initialData);
    }

    const handleCancel = () => {
        navigate(-1);
    }

    return (
        <>
            <Menu />
            <main className={styles["form-container"]}>
                <h1>Ajouter un nouveau livre</h1>
                <form onSubmit={handleSubmit}>
                    <div className={styles.row}>
                        <div className={styles["col-label"]}>
                            <label htmlFor="title">Titre</label>
                        </div>
                        <div className={styles["col-input"]}>
                            <input id="title"
                                   type="text"
                                   name="title"
                                   value={data.title}
                                   onChange={handleChange}
                                   placeholder="Ex.: Les Misérables"/>
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles["col-label"]}>
                            <label htmlFor="author">Auteur</label>
                        </div>
                        <div className={styles["col-input"]}>
                            <input id="author"
                                   type="text"
                                   name="author"
                                   value={data.author}
                                   onChange={handleChange}
                                   placeholder="Ex.: Victor Hugo"/>
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles["col-label"]}>
                            <label htmlFor="publication">Date de publication</label>
                        </div>
                        <div className={styles["col-input"]}>
                            <input id="publicationDate"
                                   type="text"
                                   name="publicationDate"
                                   value={data.publicationDate}
                                   onChange={handleChange}
                                   placeholder="Ex.: 1930, février 2000, ..."/>
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles["col-label"]}>
                            <label htmlFor="isbn">Code ISBN</label>
                        </div>
                        <div className={styles["col-input"]}>
                            <input id="isbn"
                                   type="text"
                                   name="isbn"
                                   value={data.isbn}
                                   onChange={handleChange}
                                   placeholder="Ex.: 9-34567-23456-6"/>
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles["col-label"]}>
                            <label htmlFor="description">Description</label>
                        </div>
                        <div className={styles["col-input"]}>
                            <textarea id="description"
                                      name="description"
                                      value={data.description}
                                      onChange={handleChange}
                                      placeholder="Ex;: résumé de fin de couverture, extrait, ...">
                            </textarea>
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles["col-label"]}>
                            <label htmlFor="isRead">Lu</label>
                        </div>
                        <div className={styles["col-input"]}>
                            <select id="isRead"
                                    name="isRead"
                                    value={data.isRead}
                                    disabled={true}>
                                <option value="0">Non</option>
                                <option value="1">Oui</option>
                            </select>
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles["col-label"]}></div>
                        <div className={styles["col-input"]}>
                            <ActionButton
                              isFromForm={true}
                              label={"Annuler"}
                              inputType={"button"}
                              action={handleCancel}
                              style={"cancel"}
                            />
                            <ActionButton
                              isFromForm={true}
                              label={"Enregistrer"}
                              inputType={"submit"}
                              style={"submit"}
                              />
                            <ActionButton
                              isFromForm={true}
                              label={"Effacer"}
                              inputType={"button"}
                              action={handleClear}
                              style={"clear"}
                            />
                        </div>
                    </div>
                </form>
            </main>
        </>
    )
}

export default AddBook;