import * as React from "react";
import Menu from "../../components/Menu/Menu";
// @ts-ignore
import styles from "./Admin.module.css";
import { useEffect, useState } from "react";
import { Book } from "../../types/Types";
import CallAPI from "../../hooks/CallAPI";

const Admin = () => {
    const [data, setData] = useState<Book[]>([]);
    const[message, setMessage] = useState("");

    const page = 0;
    const pageSize = 5;
    const url= `http://localhost:8080/books/100?page=${page}&size=${pageSize}`;
    const apiMethod = "GET";

    useEffect(() => {
        CallAPI({url, apiMethod, setData});
    }, [page]);

    const handleUploadBooks = async () => {
        try{
            const response =  await fetch("http://localhost:8080/books/upload", {
                method: "POST",
            });
            const result = await response.text();
            setMessage(result);
        }
        catch (error) {
            setMessage("Erreur lors du chargement des livres.");
        }
    };

    if (message !== "") console.log(message);

    return (
        <>
            <Menu />
            <div className={styles.App}>
                <h1>Administration</h1>
                <main className={styles["App-main"]}>
                    <div className={styles["buttons-container"]}>
                        <button className={styles["button-link"]} onClick={() => document.location.href = "/add-book"}>Ajouter un autre livre</button>
                        {data.length === 0 && <button className={styles["button-link"]} onClick={handleUploadBooks}>Charger les livres</button>}
                    </div>

                </main>
            </div>
        </>
    )
}

export default Admin;