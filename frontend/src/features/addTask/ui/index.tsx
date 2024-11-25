import React from "react";
import { isAddTaskModalOpen } from "../model/addTaskModalState";
import { closeAddTaskModalHandler } from "../model/addTaskModalHandlers";
import * as styles from "./styles.module.css";




export const AddTask = () => {
  console.log(`Current modal state is ${isAddTaskModalOpen.get()}`)

  const isModalOpen = isAddTaskModalOpen.get() ? "modal-grey-background" : "modal-grey-background-none";


  return (
    <div className={styles[isModalOpen]}>
      <div className={styles["modal-window"]}>
        <h3>Добавить задачу</h3>
        <form className={styles["modal-window-form"]}>
          <input placeholder="Что планируете сделать" type="text" />
          <input placeholder="Приоритет задачи от 1 до 5" type="text" />
          <textarea name="" id="" placeholder="Описание задачи"></textarea>
        </form>
        <div className={styles["modal-window-buttons"]}>
          <button>Добавить</button>
          <button onClick={closeAddTaskModalHandler}>Отмена</button>
        </div>
      </div>
    </div >
  )
}