import * as React from "react";
import Menu from "../../components/Menu/Menu";
// @ts-ignore
import styles from './List100Books.module.css';
import {useEffect, useState} from "react";
import BookCard from "../../components/BookCard/BookCard";

const List100Books = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:8080/books/100");
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setData(data);
            } catch (error) {
                console.error(error);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchData();

    }, []);

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
                        />
                    ))}
                </main>
            </div>
        </>

    );
}

export default List100Books;