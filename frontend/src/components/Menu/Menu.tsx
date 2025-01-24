import styles from './Menu.module.css';

const Menu = () => {

    return (
        <>
            <header>
                <nav className={styles['nav-header']}>
                    <div className={styles.logo}>
                        <a href="/">100</a>
                    </div>
                    <a href="/100-books">Les 100 livres à lire</a>
                    <a href="/other-books"> Les autres livres</a>
                </nav>
            </header>
        </>
    )
}



export default Menu;