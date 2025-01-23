import styles from './BookCard.module.css';
import ChecIcon from '../../assets/icons/ico-check.png';
import UnchecIcon from '../../assets/icons/ico-uncheck.png';

const BookCard = (props: {
    title: string;
    author: string;
    publication: string;
    isbn: string;
    description: string;
    isRead: string;
}) => {

    console.table(props);
    const isRead = ()=> props.isRead == "1" ? <img src={ChecIcon} alt=""/> : <img src={UnchecIcon} alt=""/>
    return (
        <>
            <div className={styles.card}>
               <p>{props.title}</p>
                <p>{props.author}</p>
                <p>{props.publication}</p>
                <p>{props.isbn}</p>
                <p className={styles['card-description']}>{props.description}</p>
                <div>
                    {isRead()}
                </div>
            </div>
        </>

    )
}

export default BookCard;