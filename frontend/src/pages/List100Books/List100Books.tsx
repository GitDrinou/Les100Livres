import * as React from "react";
import Menu from "../../components/Menu/Menu";
import {useEffect, useState} from "react";
import BookCard from "../../components/BookCard/BookCard";
import CallAPI from "../../hooks/CallAPI";
// @ts-ignore
import styles from "./Liist100Books.module.css";


const List100Books = () => {
    const url= "http://localhost:8080/books/100";
    const apiMethod = "GET";

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false)

    useEffect(() => {
        CallAPI({url, apiMethod, setData, setLoading, setError});
    }, []);


    return (
        <>
            <Menu />
            <div className={styles.App}>
                <h1>Liste des 100 livres à lire</h1>
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

export default List100Books;