import {useEffect, useState} from "react";
import BookCard from "../../components/BookCard/BookCard";
import * as React from "react";
import Menu from "../../components/Menu/Menu";
import CallAPI from "../../hooks/CallAPI";

const ListOtherBooks = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false)

    CallAPI("http://localhost:8080/books/others", setData, setError, setLoading);

    return (
        <>
            <Menu />
            <div className="App">
                { loading && <div> Loading...</div> }
                { error && <div> Une erreur est survenue...</div> }
                <main className="App-main">
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