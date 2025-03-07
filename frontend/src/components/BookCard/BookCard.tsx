import styles from './BookCard.module.css';
import ChecIcon from '../../assets/icons/ico-check.png';
import UnchecIcon from '../../assets/icons/ico-uncheck.png';
import UpdateIcon from '../../assets/icons/ico-update.png';
import DeleteBook from '../../assets/icons/ico-delete.png';
import CallAPI from "../../hooks/CallAPI.ts";

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

  const url = "http://localhost:8080/books/" + props.bookId;
  let apiMethod = "DELETE";

  const isRead = () => props.isRead == "1" ? <img src={ChecIcon} alt="Status: lu" title="Livre lu"/> : <img src={UnchecIcon} alt="Status: non lu" title="Livre non lu"/>

  const displayReadIcon = () => props.type == "1" ? isRead() : null;

  const handleClickUpdate = () => {
    document.location.href=`/update-book/${props.bookId}`;
  }

  const handleClickDelete = () => {
    const body = null;
    CallAPI({url, apiMethod, body});
    document.location.href='/other-books';
  }

  return (
    <>
      <div className={styles.card}>
        <p className={styles["book-title"]}>{props.title}</p>
        <p className={styles["book-author"]}>{props.author}</p>
        <p className={styles["book-date"]}>{props.publication}</p>
        <p className={styles['book-description']}>{props.description}</p>
        <p className={styles["book-isbn"]}>Code ISBN: {props.isbn}</p>
        {props.type === "1" &&
            <div className={styles["block-status"]}>
              {displayReadIcon()}
              {props.isRead === "0" && <img src={UpdateIcon} id="icon_update" alt="Modifier les élements du livre" title="Modifier" onClick={handleClickUpdate}/> }
            </div>
        }
        {props.type === "0" &&
            <div className={styles["block-status"]}>
                <img src={DeleteBook} id="icon_delete" alt="Supprimer le livre" title="Supprimer" onClick={handleClickDelete}/>
            </div>
        }
      </div>
    </>

  )
}

export default BookCard;