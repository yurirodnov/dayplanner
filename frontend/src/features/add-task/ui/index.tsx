import React, { useEffect } from "react";
import { useHookstate } from "@hookstate/core";
import { isAddTaskModalOpen } from "../model/addTaskModalState";
import { closeAddTaskModalHandler, closeAddTaskModalHandlerEsc } from "../model/addTaskModalHandlers";
import * as styles from "./styles.module.css";

export const AddTask = () => {
  // console.log(`Current modal state is ${isAddTaskModalOpen.get()}`)
  const currentModalState = useHookstate(isAddTaskModalOpen)
  const isModalOpen = currentModalState.get();

  useEffect(() => {
    document.addEventListener('keyup', () => closeAddTaskModalHandlerEsc)
  }, [])



  return (
    <div className={isModalOpen ? styles.modalGreyBackground : styles.modalGreyBackgroundNone} >
      <div className={styles.modalWindow} >
        <h3>Добавить задачу</h3>
        <form className={styles.modalWindowForm}>
          <label htmlFor="task-name">Что планируете сделать:</label>
          <input type="text" id="task-name" className={styles.inputTaskName} />
          <label htmlFor="priority-select">Приоритет задачи:</label>
          <div className={styles.selectTaskPriority}>
            <div className={styles.selectTaskPriorityOption}>
              <input type="radio" name="priority" id="priority-low" />
              <label htmlFor="priority-low">Низкий</label>
            </div>
            <div className={styles.selectTaskPriorityOption}>
              <input type="radio" name="priority" id="priority-medium" />
              <label htmlFor="priority-medium">Средний</label>
            </div>
            <div className={styles.selectTaskPriorityOption}>
              <input type="radio" name="priority" id="priority-high" />
              <label htmlFor="priority-high">Высокий</label>
            </div>

          </div>
          <label htmlFor="task-description">Описание задачи:</label>
          <textarea name="textarea" id="task-description" className={styles.textAreaTaskDescription} ></textarea>
        </form>
        <div className={styles.modalWindowButtons}>
          <button className={styles.addTaskButton}>Добавить</button>
          <button onClick={closeAddTaskModalHandler} className={styles.cancelButton}>Отмена</button>
        </div>
      </div >
    </div >
  )
}