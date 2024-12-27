import React, { FC } from "react";
import check from "../../../assets/icons/check.svg"
import * as styles from "./styles.module.css";


export const PageHome: FC = () => {
  return (
    <div className={styles.welcomeBlock}>

      <h1 className={styles.welcomeBlockHeading}>Добро пожаловать в Dayplanner!</h1>

      <div className={styles.welcomeBlockDescription}>
        <div className={styles.welcomeBlockDescriptionPoint}><p>Ставьте задачи</p><img src={check} style={{ width: "20px" }} /></div>
        <div className={styles.welcomeBlockDescriptionPoint}><p>Достигайте целей</p><img src={check} style={{ width: "20px" }} /></div>
        <div className={styles.welcomeBlockDescriptionPoint}><p>Отслеживайте результат</p><img src={check} style={{ width: "20px" }} /></div>

      </div>

    </div>
  )
}

