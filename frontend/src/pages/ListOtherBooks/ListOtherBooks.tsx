import {useEffect, useState} from "react";
import BookCard from "../../components/BookCard/BookCard";
import * as React from "react";
import Menu from "../../components/Menu/Menu";
import CallAPI from "../../hooks/CallAPI";
// @ts-ignore
import styles from "./ListOtherBooks.module.css";
import {sortedByTitleByIsRead} from "../../scripts/utilities";
import {Book} from "../../types/Types";
import Paginationold from "../../components/Pagination/Pagination";

const ListOtherBooks = () => {
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(1);
    const [totalBooks, setTotalBooks] = useState(0);
    const [data, setData] = useState<Book[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const pageSize = 10;
    const url = `http://localhost:8080/books/others?page=${page}&size=${pageSize}`;
    const apiMethod = "GET";


    useEffect(() => {
        CallAPI({url, apiMethod, setData, setTotalPages, setTotalBooks, setLoading, setError});
    }, [page]);

    const sortedDatas = sortedByTitleByIsRead(data);

    return (
        <>
            <Menu />
            <div className={styles.otherBook}>
                <h1>Liste d'autres livres ({totalBooks})</h1>
                <p>
                    En plus des 100 livres à livre dans sa vie, cette liste regroupe d'autres livres à lire, que j'ai lu et apprécié.<br/>
                    Ils ne font pas partie de la liste des 100, mais ils auraient pu y être.<br/>
                    Bonne lecture !
                </p>
                { loading && <div> Loading...</div> }
                { error && <div> Une erreur est survenue...</div> }
                <Paginationold
                    actualPage={page}
                    setPage={setPage}
                    totalPages={totalPages}
                />
                <main className={styles["otherBook-main"]}>
                    { sortedDatas.map((book: Book) => (
                        <BookCard
                            key={book.id}
                            bookId={book.id}
                            title={book.title}
                            author={book.author}
                            isbn={book.isbn}
                            publication={book.publicationDate}
                            description={book.description}
                            type={book.type100}
                            isRead={book.isRead}
                        />
                    ))}
                </main>
                <Paginationold
                    actualPage={page}
                    setPage={setPage}
                    totalPages={totalPages}
                />
            </div>
        </>

    );
}

export default ListOtherBooks;