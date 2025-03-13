import styles from "./Pagination.module.css";
import ActionButton from "../ActionButton/ActionButton.tsx";

const Pagination = (props: {
  actualPage: number,
  setPage: (value: (((prevState: number) => number) | number)) => void,
  totalPages: number
}) =>  {
  return (
    <>
      <div className={styles.container}>
        <ActionButton
          isFromForm={false}
          label={"Précédent"}
          action={async () => props.setPage(props.actualPage - 1)}
          disabled={props.actualPage === 0}
        />
        <span>Page {props.actualPage + 1} / {props.totalPages}</span>
        <ActionButton
          isFromForm={false}
          label={"Suivant"}
          action={async () => props.setPage(props.actualPage + 1)}
          disabled={props.actualPage +1 >= props.totalPages}
        />
      </div>
    </>
  );
}

export default Pagination;