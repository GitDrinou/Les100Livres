import * as React from "react";
import Menu from "../../components/Menu/Menu";
import {useEffect, useState} from "react";
import BookCard from "../../components/BookCard/BookCard";
import CallAPI from "../../hooks/CallAPI";

const List100Books = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false)

  CallAPI("http://localhost:8080/books/100", setData, setError, setLoading);

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

export default List100Books;