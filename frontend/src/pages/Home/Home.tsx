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
                <h2>A l'origine</h2>
                <div className={styles.container}>
                    <div className={styles["col-left"]}>
                        <img src={ImgAffiche} alt="Affiche du film Equalizer"/>
                    </div>
                    <div className={styles["col-right"]}>
                        <p>
                            Lorem ipsum odor amet, consectetuer adipiscing elit. Nostra lobortis tellus elementum ad elit commodo diam. Volutpat massa tincidunt blandit vestibulum finibus? Eu ut condimentum nullam, sollicitudin finibus nisl. Magnis penatibus penatibus fusce turpis curabitur viverra felis. Mauris hendrerit habitant at; nam cursus habitasse curae curabitur malesuada. Mollis erat curae aliquam; luctus integer facilisi. Vitae netus gravida; mus quam vulputate enim. Odio ante ultricies vulputate mattis sagittis et eros consequat consectetur.
                            Posuere adipiscing tempor, lobortis praesent duis curabitur. Neque pretium etiam suscipit duis proin montes in. Nisi ad euismod montes vivamus mollis nec risus porttitor. Sociosqu duis ultricies justo, molestie fusce eu. Euismod dui in aliquet tortor potenti fermentum aliquam. Class nec sed himenaeos amet rhoncus luctus sodales penatibus fermentum. Quam sagittis varius diam taciti suscipit. Auctor bibendum sociosqu eros condimentum imperdiet pellentesque.
                            Senectus sit pellentesque scelerisque sociosqu torquent velit congue lacus. Nec rhoncus egestas aptent risus pharetra porta ut. Ut ridiculus cubilia vehicula efficitur rutrum mattis elit ipsum malesuada. Scelerisque phasellus sociosqu ac ligula hendrerit senectus ridiculus. At nisi vestibulum nostra nibh ridiculus malesuada. Lacus fusce phasellus fusce ac auctor est? Ut dis tempor suspendisse accumsan ex tincidunt per. Nisl purus conubia adipiscing vitae amet praesent mi. Iaculis luctus volutpat ac cubilia morbi id aliquam porta aptent.
                            Faucibus nibh ante ad nec venenatis consequat. Mollis sociosqu malesuada laoreet at amet faucibus molestie. Elit torquent sed tellus quisque in felis in vehicula. Sollicitudin nostra risus egestas nec duis cras! Lacinia nisi duis interdum elementum morbi fermentum commodo. Consequat ut orci duis sodales ac feugiat magna sem. Sagittis blandit vulputate, commodo eget ante lacus. Conubia sem nam torquent taciti aptent porttitor pharetra dapibus.
                            Nam tellus elit netus justo; mus nisl penatibus. In non dignissim pretium enim aptent nibh; lacus gravida. Metus platea vitae cursus morbi eu felis sem. Vitae sociosqu mi nec, sed a nec. Ornare dui facilisis odio lectus tincidunt finibus tincidunt. Elementum est venenatis cubilia ex ridiculus bibendum mauris etiam enim? Facilisi metus hendrerit parturient; malesuada massa himenaeos. Vestibulum nibh torquent ultricies, lectus sit facilisi.
                        </p>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Home;