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
          <input type="text" id="task-name" className={styles.inputTaskName} />
          <label htmlFor="priority-select">Приоритет задачи:</label>
          <div className={styles.selectTaskPriority}>
            <div className={styles.taskPriorityLow} title="Низкий"></div>
            <div className={styles.taskPriorityMedium} title="Средний"></div>
            <div className={styles.taskPriorityHigh} title="Высокий"></div>
          </div>
          <label htmlFor="task-description">Описание задачи:</label>
          <textarea name="textarea" id="task-description" className={styles.textAreaTaskDescription} ></textarea>
        </form>
        <div className={styles.modalWindowButtons}>
          <button className={styles.addTaskButton}>Добавить</button>
          <button onClick={closeAddTaskModalHandler} className={styles.cancelButton}>Отмена</button>
        </div>
      </div>
    </div >
  )
}