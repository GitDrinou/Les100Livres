// @ts-ignore
import styles from './BookCard.module.css';

const BookCard = (props: {
    title: string;
    author: string;
    publication: string;
    isbn: string;
    description: string; }) => {

    return (
        <>
            <div className={styles.card}>
               <p>{props.title}</p>
                <p>{props.author}</p>
                <p>{props.publication}</p>
                <p>{props.isbn}</p>
                <p className={styles['card-description']}>{props.description}</p>
            </div>
        </>

    )
}

export default BookCard;