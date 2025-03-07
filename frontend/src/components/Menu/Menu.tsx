import styles from './Menu.module.css';
import ImgBooks from "../../assets/images/img-books.webp";

const Menu = () => {

  const pathname = document.location.pathname;

  const displayAdmin = pathname != "/admin" ? <a href="/admin">Administration</a> : null;

  return (
    <>
      <header>
        <nav className={styles['nav-header']}>
          <div className={styles.logo}>
            <a href="/">
              <img src={ImgBooks} alt="Logo:retour à l'accueil"/>
            </a>
          </div>
          <a href="/100-books">Les 100 livres à lire</a>
          <a href="/other-books">D'autres livres</a>
        </nav>

        <div className={styles["admin-link"]}>
          {displayAdmin}
        </div>
      </header>
    </>
  )
}



export default Menu;