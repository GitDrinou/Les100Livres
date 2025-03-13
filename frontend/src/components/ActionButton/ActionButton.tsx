import * as React from "react";
import styles from "./ActionButton.module.css";

const ActionButton = (props:{
  isFromForm:boolean,
  inputType?:string,
  label: string,
  action?: () => void,
  disabled?: boolean,
  style?: string,
}) => {
  return (
    <>
      {props.isFromForm &&
          <input
              type={props.inputType}
              className={styles[`button-${props.style}`]}
              value={props.label}
              onClick={props.action}
               />
      }

      {!props.isFromForm &&
          <button
              disabled={props.disabled}
              onClick={props.action}>{props.label}
          </button>
      }

    </>

  );
};

export default ActionButton;