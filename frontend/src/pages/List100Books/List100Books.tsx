import * as React from "react";
import Menu from "../../components/Menu/Menu";
import {useState} from "react";
import BookCard from "../../components/BookCard/BookCard";
import CallAPI from "../../hooks/CallAPI";
// @ts-ignore
import styles from "./Liist100Books.module.css";


const List100Books = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false)

  CallAPI("http://localhost:8080/books/100", setData, setError, setLoading);

    return (
        <>
            <Menu />
            <div className={styles.App}>
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