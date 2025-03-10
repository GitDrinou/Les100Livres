import * as React from "react";
import Menu from "../../components/Menu/Menu";
import {useEffect, useState} from "react";
import BookCard from "../../components/BookCard/BookCard";
import CallAPI from "../../hooks/CallAPI";
// @ts-ignore
import styles from "./Liist100Books.module.css";
import {sortedByTitleByIsRead} from "../../scripts/utilities";
import {Book} from "../../types/Types";
import Pagination from "../../components/Pagination/Pagination";
import * as url from "node:url";


const List100Books = () => {
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(1);
    const [data, setData] = useState<Book[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false)

    const pageSize = 10;
    const url= `http://localhost:8080/books/100?page=${page}&size=${pageSize}`;
    const apiMethod = "GET";

    useEffect(() => {
        CallAPI({url, apiMethod, setData, setTotalPages, setLoading, setError});
    }, [page]);

    const sortedDatas = sortedByTitleByIsRead(data);

    const displayCounter = () => {
        let countRead = 0;
        const totalCount = 100;

        if (!loading){
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
                <Pagination
                    actualPage={page}
                    setPage={setPage}
                    totalPages={totalPages}
                />
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
                <Pagination
                    actualPage={page}
                    setPage={setPage}
                    totalPages={totalPages}
                />
            </div>
        </>

    );
}

export default List100Books;