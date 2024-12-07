import React, { FC } from "react";
import * as styles from "./registration.module.css"


export const RegistrationButton: FC = () => {
  return (
    <button className={styles.userRegistrationButton}>Зарегистрироваться</button>
  )
}