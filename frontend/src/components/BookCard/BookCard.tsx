import styles from './BookCard.module.css';
import ChecIcon from '../../assets/icons/ico-check.png';
import UnchecIcon from '../../assets/icons/ico-uncheck.png';
import UpdateIcon from '../../assets/icons/ico-update..png';

const BookCard = (props: {
    bookId: number;
    title: string;
    author: string;
    publication: string;
    isbn: string;
    description: string;
    type: string;
    isRead: string;
}) => {

    const haveToUpdate = () => props.type === "1" ? <img src={UpdateIcon} alt="Modifier les élements du livre" title="Modifier" onClick={handleClick}/> : null;
    const isRead = ()=> props.isRead == "1" ? <img src={ChecIcon} alt="Status: lu" title="Livre lu"/> : <img src={UnchecIcon} alt="Status: non lu" title="Livre non lu"/>

    const displayUpdateIcon = () => props.type == "1" ? isRead() : null;
    const displayReadIcon = () => props.type == "1" ? haveToUpdate() : null;

    function handleClick() {
        document.location.href=`/update-book/${props.bookId}`;
    }

    return (
        <>
            <div className={styles.card}>
               <p className={styles["book-title"]}>{props.title}</p>
                <p className={styles["book-author"]}>{props.author}</p>
                <p className={styles["book-date"]}>{props.publication}</p>
                <p className={styles['book-description']}>{props.description}</p>
                <p className={styles["book-isbn"]}>Code ISBN: {props.isbn}</p>
                <div className={styles["block-status"]}>
                    {displayReadIcon()}
                    {displayUpdateIcon()}
                </div>
            </div>
        </>

    )
}

export default BookCard;