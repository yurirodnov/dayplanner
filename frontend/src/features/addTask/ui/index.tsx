import React from "react";
import { useHookstate } from "@hookstate/core";
import { isAddTaskModalOpen } from "../model/addTaskModalState";
import { closeAddTaskModalHandler } from "../model/addTaskModalHandlers";
import * as styles from "./styles.module.css";

export const AddTask = () => {
  console.log(`Current modal state is ${isAddTaskModalOpen.get()}`)
  const currentModalState = useHookstate(isAddTaskModalOpen)
  const isModalOpen = currentModalState.get();


  return (
    <div className={isModalOpen ? styles.modalGreyBackground : styles.modalGreyBackgroundNone}>
      <div className={styles.modalWindow}>
        <h3>Добавить задачу</h3>
        <form className={styles.modalWindowForm}>
          <label htmlFor="task-name">Что планируете сделать:</label>
          <input type="text" id="task-name" />
          <label htmlFor="priority-select">Приоритет задачи:</label>
          <select name="priority" id="task-priority-select">
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
          <label htmlFor="task-description">Описание задачи:</label>
          <textarea name="textarea" id="task-description"></textarea>
        </form>
        <div className={styles.modalWindowButtons}>
          <button>Добавить</button>
          <button onClick={closeAddTaskModalHandler}>Отмена</button>
        </div>
      </div>
    </div >
  )
}