import React from "react";
import * as styles from "./styles.module.css";




export const AddTask = () => {




  return (
    <div className={styles["modal-grey-background"]}>
      <div className={styles["modal-window"]}>
        <h3>Добавить задачу</h3>
        <form className={styles["modal-window-form"]}>
          <input placeholder="Что планируете сделать" type="text" />
          <input placeholder="Приоритет задачи от 1 до 5" type="text" />
          <textarea name="" id="" placeholder="Описание задачи"></textarea>
        </form>
        <div className={styles["modal-window-buttons"]}>
          <button>Добавить</button>
          <button>Отмена</button>
        </div>
      </div>
    </div >
  )
}