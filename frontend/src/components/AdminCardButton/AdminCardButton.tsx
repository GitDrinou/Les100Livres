import styles from './AdminCardButton.module.css';
import * as React from "react";
import ActionButton from "../ActionButton/ActionButton.tsx";

const AdminCardButton = (props: {
  description: string;
  actionButton: () => {};
  label: string;
}) => {

  return (
    <>
      <div className={styles.card}>
        <p className={styles['button-description']}>{props.description}</p>
        <ActionButton
          isFromForm={false}
          label={props.label}
          action={props.actionButton} />
      </div>
    </>

  )
}

export default AdminCardButton;