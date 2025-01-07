import React from "react";
import { taskListState } from "../model/taskListState";
import * as styles from "./styles.module.css"
import { Task } from "src/entities/task";
import { useHookstate, State } from "@hookstate/core";
import { changeTaskStatus } from "../model/taskListState";
// import { useGlobalState } from "../model/taskListState";


export const TaskList: React.FC = () => {


  const taskListForRender = useHookstate(taskListState);
  // const taskListForRender = useGlobalState();



  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => { }

  const handlePrioritySelect = (): void => { }

  const handleAddTaskButton = (): void => { }

  const handleFinishTaskButton = (e: React.ChangeEvent<HTMLInputElement>): void => {

    changeTaskStatus(e.currentTarget.dataset.task)
  }

  const handleRemoveTaskButton = (): void => { }


  return (
    <div className={styles.taskListWrapper}>
      <form className={styles.taskListForm}>
        <input type="text" placeholder="Что планируете сделать?" className={styles.taskFormInput}></input>
        <div className={styles.taskPriorityBlock}>
          <label className={`${styles.taskPriority} ${styles.high}`} title="Высокий приоритет" htmlFor="high-priority"></label>
          <input type="radio" name="priority" id="high-priority" />
          <label className={`${styles.taskPriority} ${styles.medium}`} title="Средний приоритет" htmlFor="medium-priority"></label>
          <input type="radio" name="priority" id="medium-priority" />
          <label className={`${styles.taskPriority} ${styles.low}`} title="Низкий приоритет" htmlFor="low-priority"></label>
          <input type="radio" name="priority" id="low-priority" />
        </div>
        <button type="button" className={styles.taskButton}>Добавить</button>
      </form >
      <div className={styles.taskList}>
        {taskListForRender.get().map((task) => (
          <div className={`${styles.taskCard}`} key={task.id} >
            <div className={`${task.isDone ? styles.done : null}`}>{task.text}</div>
            <input type="checkbox" onChange={(e) => handleFinishTaskButton(e)} data-task={task.text} />
          </div>
        ))}
      </div>
    </div >
  )
}