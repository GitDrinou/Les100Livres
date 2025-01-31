import * as React from "react";
import Menu from "../../components/Menu/Menu";
import {useEffect, useState} from "react";
import BookCard from "../../components/BookCard/BookCard";
import CallAPI from "../../hooks/CallAPI";
// @ts-ignore
import styles from "./Liist100Books.module.css";
import {sortedByTitleByIsRead} from "../../scripts/utilities";


const List100Books = () => {
    const url= "http://localhost:8080/books/100";
    const apiMethod = "GET";

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false)

    useEffect(() => {
        CallAPI({url, apiMethod, setData, setLoading, setError});
    }, []);

    const sortedDatas = sortedByTitleByIsRead(data);

    const displayCounter = () => {
        let countRead = 0;
        let totalCount = 0;

        if (!loading){
            totalCount = data.length;
            for (const book of data) {
                if (book.is_read ==="1") {
                    countRead++;
                }
            }
            return countRead + "/" + totalCount;
        }

        return "";
    }

    return (
        <>
            <Menu />
            <div className={styles.App}>
                <h1>Liste des 100 livres à lire</h1>
                <p>
                    Cette liste n'est bien évidemment pas exhaustive, mais ce sont les 100 oeuvres à lire dans sa vie.<br/>
                    On peut y trouver des romans, des nouvelles, des recueils de poèmes, etc...<br/>
                </p>
                <div className={styles.counter}>{displayCounter()}</div>
                { loading && <div> Loading...</div> }
                { error && <div> Une erreur est survenue...</div> }
                <main className={styles["App-main"]}>
                    { sortedDatas.map(book => (
                        <BookCard
                            key={book.id}
                            bookId={book.id}
                            title={book.title}
                            author={book.author}
                            isbn={book.isbn}
                            publication={book.publicationDate}
                            description={book.description}
                            type={book.type100}
                            isRead={book.is_read}
                        />
                    ))}
                </main>
            </div>
        </>

    );
}

export default List100Books;