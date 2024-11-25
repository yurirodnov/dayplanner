import React, { FC } from "react";
import check from "../../../assets/icons/check.svg"
import * as styles from "./styles.module.css";


export const PageHome: FC = () => {
  return (
    <div className={styles["welcome-block"]}>

      <h1 className={styles["welcome-block-heading"]}>Добро пожаловать в планировщик дня!</h1>

      <div className="welcome-block description">
        <div className={styles["welcome-block-description-point"]}><p>Ставьте задачи</p><img src={check} style={{ width: "20px" }} /></div>
        <div className={styles["welcome-block-description-point"]}><p>Достигайте целей</p><img src={check} style={{ width: "20px" }} /></div>
        <div className={styles["welcome-block-description-point"]}><p>Отслеживайте результат</p><img src={check} style={{ width: "20px" }} /></div>

      </div>

    </div>
  )
}

