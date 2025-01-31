import styles from './Menu.module.css';
import ImgBooks from "../../assets/images/img-books.webp";

const Menu = () => {

    return (
        <>
            <header>

                <nav className={styles['nav-header']}>
                    <div className={styles.logo}>
                        <a href="/"><img src={ImgBooks} alt="Logo- retour à l'accueil"/></a>
                    </div>
                    <a href="/100-books">Les 100 livres à lire</a>
                    <a href="/other-books"> D'autres livres</a>
                </nav>
            </header>
        </>
    )
}



export default Menu;