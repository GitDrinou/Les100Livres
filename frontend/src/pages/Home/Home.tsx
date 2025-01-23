import Menu from "../../components/Menu/Menu";
// @ts-ignore
import styles from './Home.module.css';

const Home = () => {
    return (
        <>
            <Menu />
            <main className={styles.main}>
                <p>Home page here</p>
            </main>
        </>
    )
}

export default Home;