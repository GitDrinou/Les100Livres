import {useEffect, useState} from "react";
import BookCard from "../../components/BookCard/BookCard";
import * as React from "react";
import Menu from "../../components/Menu/Menu";
import CallAPI from "../../hooks/CallAPI";
// @ts-ignore
import styles from "./ListOtherBooks.module.css";
import {sortedByTitleByIsRead} from "../../scripts/utilities";
import {Book} from "../../types/Types";
import Pagination from "../../components/Pagination/Pagination";

const ListOtherBooks = () => {
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(1);
    const [data, setData] = useState<Book[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const pageSize = 5;
    const url = `http://localhost:8080/books/others?page=${page}&size=${pageSize}`;
    const apiMethod = "GET";


    useEffect(() => {
        CallAPI({url, apiMethod, setData, setTotalPages, setLoading, setError});
    }, [page]);

    const sortedDatas = sortedByTitleByIsRead(data);

    return (
        <>
            <Menu />
            <div className={styles.otherBook}>
                <h1>Liste d'autres livres</h1>
                <p>
                    Cette liste est en plus de celle des 100 livres à lire dans sa vie.<br/>
                    Ce sont des livres que j'ai lu et que je conseillerais de lire (surtout les "Werber", parce que j'en suis fan).
                </p>
                { loading && <div> Loading...</div> }
                { error && <div> Une erreur est survenue...</div> }
                <Pagination
                    actualPage={page}
                    setPage={setPage}
                    totalPages={totalPages}
                />
                <main className={styles["otherBook-main"]}>
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

export default ListOtherBooks;