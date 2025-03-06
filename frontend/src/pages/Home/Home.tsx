import * as React from "react";
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
                            Le héros, Robert McCall, est un ancien agent secret qui a des insomnies.<br/>
                            Dans le premier volet, la nuit, il s'installe à la même table d'un café avec un livre figurant dans la "liste des 100 romans qu'il faut avoir lus".<br/>
                            C'est sa femme qui avait commencé cette liste. Malheureusement, elle est morte avant d'avoir pu la finir. <br/>
                            En hommage à son épouse décédée, il se lance à son tour dans la lecture de ces romans.<br/>
                        </p>
                        <h2>Réflexion</h2>
                        <p>
                            Je ne me suis jamais définie comme une grande lectrice.<br/>
                            J'ouvrais un livre de temps en temps pour m'évader. <br/>
                            De Stephen King avec "Le Fléau", en passant par "L'Empire des anges" de Bernard Werber, ou plus récemment "La prochaine fois que tu mordras la poussière" de Panayotis Pascot, on peut dire que n'ai pas de genre préféré. <br/>
                            J'avoue cependant avoir un petit faible pour les romans de Bernard Werber. <br/>
                            Bref, j'ai décidé de me lancer à mon tour dans la lecture de ces 100 livres avec un objectif de découvrir de nouveaux auteurs ou d'étendre mon horizon. <br/>
                        </p>
                        <h2>Conseil</h2>
                        <p>
                            Les autres livres, que j'ai listés, sont ceux que j'ai trouvé intéressants, et que je conseillerais de lire.
                            Ils ne font pas partis de la liste de 100, mais certains auraient pu en faire partie.
                        </p>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Home;