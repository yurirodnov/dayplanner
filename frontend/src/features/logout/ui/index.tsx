import React, { FC } from "react";
import * as styles from "./logout.module.css"


export const LogoutButton: FC = () => {
  return (
    <button className={styles.userEnterBlockButton}>Выйти</button>
  )
}