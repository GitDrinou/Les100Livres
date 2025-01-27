import {useEffect, useState} from "react";
import BookCard from "../../components/BookCard/BookCard";
import * as React from "react";
import Menu from "../../components/Menu/Menu";
import Buttons from "../../components/Submenu/Submenu";
import CallAPI from "../../hooks/CallAPI";
// @ts-ignore
import styles from "./ListOtherBooks.module.css";

const ListOtherBooks = () => {
    const url = "http://localhost:8080/books/others";
    const apiMethod = "GET";

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        CallAPI({url, apiMethod, setData, setLoading, setError});
    }, []);

    return (
        <>
            <Menu />
            <Buttons />
            <div className={styles.App}>
                <h1>Liste d'autres livres à lire</h1>
                { loading && <div> Loading...</div> }
                { error && <div> Une erreur est survenue...</div> }
                <main className={styles["App-main"]}>
                    { data.map(book => (
                        <BookCard
                            key={book.id}
                            title={book.title}
                            author={book.author}
                            isbn={book.isbn}
                            publication={book.publicationDate}
                            description={book.description}
                            isRead={book.is_read}
                        />
                    ))}
                </main>
            </div>
        </>

    );
}

export default ListOtherBooks;