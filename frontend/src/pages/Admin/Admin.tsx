import * as React from "react";
import Menu from "../../components/Menu/Menu";
// @ts-ignore
import styles from "./Admin.module.css";
import { useEffect, useState } from "react";
import { Book } from "../../types/Types";
import CallAPI from "../../hooks/CallAPI";
import ButtonCard from "../../components/ButtonCard/ButtonCard";

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
                        <ButtonCard
                          description={"Cliquez ici, si vous voulez ajouter un nouveau livre dans la catégorie" +
                            " 'Autres'."}
                          label={"Ajouter un livre"}
                          actionButton={() => document.location.href = "/add-book"}
                        />
                        <ButtonCard
                          description={"Cliquez ici, si vous voulez mettre à jour un livre."}
                          label={"Modifier un livre"}
                          actionButton={() => document.location.href = "/update-a-book"}
                        />
                        {data.length === 0 &&
                          <ButtonCard
                            description={"Cliquez ici, si tous les livres ne sont pas chargés dans les pages de" +
                              " présentation."}
                            label={"Charger les livres"}
                            actionButton={handleUploadBooks}
                          />
                        }
                    </div>

                </main>
            </div>
        </>
    )
}

export default Admin;