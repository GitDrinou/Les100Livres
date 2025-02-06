import Menu from "../../components/Menu/Menu";
// @ts-ignore
import styles from './Home.module.css';
// @ts-ignore
import ImgAffiche from "../../assets/images/img-equalizer.webp";

const Home = () => {
    return (
        <>
            <Menu />
            <main className={styles.main}>
                <h1>Les 100... et plus !</h1>
                <div className={styles.container}>
                    <div className={styles["col-left"]}>
                        <img src={ImgAffiche} alt="Affiche du film Equalizer"/>
                    </div>
                    <div className={styles["col-right"]}>
                        <h2>A l'origine</h2>
                        <p>
                            Tout a commencé avec ce film : "Equalizer".<br/>
                            Le héros, Robert McCall, est un ancien agent secret qui a des inscomnies.<br/>
                            La nuit il s'installe à la même table d'un café avec un livre figurant dans la "liste des 100 romans qu'il faut avoir lus".<br/>
                            Sa femme a initialisé la lecture de cette liste. Malheureusement, elle est morte avant d'avoir pu finir ces 100 romans. <br/>
                            C'est en hommage à son épouse qu'il a décidé de se lancer dans la lecture de ces romans.<br/>
                        </p>
                        <h2>Réflexion</h2>
                        <p>
                            Je ne me suis jamais définie comme une grande lectrice.<br/>
                            Je lisais de temps en temps pour m'évader. <br/>
                            De Stephen King avec "Le Fléau", en passant par "L'Empire des anges" de Bernard Werber, ou plus récemment "La prochaine fois que tu mordras la poussière" de Panayotis Pascot, je n'ai pas de genre préféré. <br/>
                            Mais je dois avouer que j'ai un faible pour les romans de Bernard Werber. <br/>
                            J'ai donc décidé de me lancer dans la lecture de ces 100 livres avec un objectif de découvrir de nouveaux auteurs ou d'étendre mon horizon. <br/>
                        </p>
                        <h2>Conseil</h2>
                        <p>
                            Les autres livres, que j'ai listé, sont ceux que j'ai trouvé intéressants, et que je conseillerais de lire.
                            Ils ne font pas partis de la liste de 100, mais certains auraient pu en faire partie.
                        </p>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Home;