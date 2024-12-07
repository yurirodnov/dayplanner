import React, { FC } from "react";
import * as styles from "./authorisation.module.css"


export const AuthButton: FC = () => {
  return (
    <button className={styles.userAuthorisationButton}>Войти</button>
  )
}