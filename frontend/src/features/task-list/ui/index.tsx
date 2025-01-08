import React from "react";
import { useState } from "react";
import { taskListState } from "../model/taskListState";
import { useHookstate } from "@hookstate/core";
import { changeTaskStatus, addNewTaskToState, removeTaskFromState } from "../model/taskListState";
import { Task } from "src/entities/task";
import garbage from "../../../assets/icons/garbage.svg"
import * as styles from "./styles.module.css"



export const TaskList: React.FC = () => {

  const state = useHookstate(taskListState);

  const [newTask, setNewTask] = useState<string>("");
  const [newTaskPriority, setPriority] = useState<string>("1");




  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setNewTask(e.target.value)
  }

  const handlePrioritySelect = (e: React.MouseEvent<HTMLLabelElement>): void => {
    const inputId = e.currentTarget.htmlFor;

    const inputElement = document.getElementById(inputId) as HTMLInputElement;

    if (inputElement) {
      const selectedPriority = inputElement.dataset.priority;
      setPriority(selectedPriority)
    }
  }

  const handleAddTask = (): void => {

    const newTaskObject: Task = {
      id: state.get().length + 1,
      text: newTask,
      priority: +newTaskPriority,
      completed: false
    }

    if (newTask.length !== 0) {
      addNewTaskToState(newTaskObject, state)
    }

  }

  const handleChangeTaskStatus = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const selectedTaskText = e.currentTarget.dataset.task;
    changeTaskStatus(selectedTaskText, state)

    // const tasks = state.get() as Task[];
    // const taskToChangeIndex = tasks.findIndex(task => task.text === selectedTaskText);
    // state[taskToChangeIndex].completed.get() ? state[taskToChangeIndex].completed.set(false) : state[taskToChangeIndex].completed.set(true);

  }

  const handleRemoveTaskButton = (e: React.MouseEvent<HTMLImageElement>): void => {
    const taskToRemove: string = e.currentTarget.dataset.task;

    removeTaskFromState(state, taskToRemove)
  }


  return (
    <div className={styles.taskListWrapper}>
      <form className={styles.taskListForm}>
        <input type="text" placeholder="Что планируете сделать?" className={styles.taskFormInput} value={newTask} onChange={handleInputChange}></input>
        <div className={styles.taskPriorityBlock}>
          <label className={`${styles.taskPriority} ${styles.high}`} title="Высокий приоритет" htmlFor="high-priority" onClick={handlePrioritySelect}></label>
          <input type="radio" name="priority" id="high-priority" data-priority="1" />
          <label className={`${styles.taskPriority} ${styles.medium}`} title="Средний приоритет" htmlFor="medium-priority" onClick={handlePrioritySelect}></label>
          <input type="radio" name="priority" id="medium-priority" data-priority="2" />
          <label className={`${styles.taskPriority} ${styles.low}`} title="Низкий приоритет" htmlFor="low-priority" onClick={handlePrioritySelect}></label>
          <input type="radio" name="priority" id="low-priority" data-priority="3" />
        </div>
        <button type="button" className={styles.taskButton} onClick={handleAddTask}>Добавить</button>
      </form >
      <div className={styles.taskList}>
        {state.get().map((task) => (
          <div className={`${styles.taskCard}`} key={task.id} >
            <div className={`${task.completed ? styles.done : null} ${styles.grow}`}>{task.text}</div>
            <input type="checkbox" onChange={(e) => handleChangeTaskStatus(e)} data-task={task.text} className={styles.check} />
            <img src={garbage} width="20" className={styles.garbage} data-task={task.text} onClick={(e) => handleRemoveTaskButton(e)} />
          </div>
        ))}
      </div>
    </div >
  )
}