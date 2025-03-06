import styles from './ButtonCard.module.css';
import ChecIcon from '../../assets/icons/ico-check.png';
import UnchecIcon from '../../assets/icons/ico-uncheck.png';
import UpdateIcon from '../../assets/icons/ico-update.png';
import DeleteBook from '../../assets/icons/ico-delete.png';
import CallAPI from "../../hooks/CallAPI.ts";
import * as React from "react";

const ButtonCard = (props: {
   description: string;
   actionButton: () => {};
   label: string;
}) => {

    return (
        <>
            <div className={styles.card}>
              <p className={styles['button-description']}>{props.description}</p>
              <button className={styles["button-link"]} onClick={props.actionButton}>{props.label}</button>
            </div>
        </>

    )
}

export default ButtonCard;