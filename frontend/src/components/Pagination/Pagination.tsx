import styles from "./Pagination.module.css";

const Pagination = (props: {
    actualPage: number,
    setPage: (value: (((prevState: number) => number) | number)) => void,
    totalPages: number
}) =>  {
    return (
        <>
            <div className={styles.container}>
                <button disabled={props.actualPage === 0} onClick={()=> props.setPage(props.actualPage - 1)}>Précédent</button>
                <span>Page {props.actualPage + 1} / {props.totalPages}</span>
                <button disabled={props.actualPage +1 >= props.totalPages} onClick={()=> props.setPage(props.actualPage + 1)}>Suivant</button>
            </div>
        </>
    );
}

export default Pagination;