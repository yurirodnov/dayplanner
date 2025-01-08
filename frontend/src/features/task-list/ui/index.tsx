import React from "react";
import { useState } from "react";
import { taskListState } from "../model/taskListState";
import { useHookstate } from "@hookstate/core";
import { changeTaskStatus, addNewTaskToState } from "../model/taskListState";
import { Task } from "src/entities/task";
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
      id: 0,
      text: newTask,
      priority: +newTaskPriority,
      isDone: false
    }


    addNewTaskToState(newTaskObject, state)

    console.log(newTaskObject)
  }

  const handleChangeTaskStatus = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const selectedTaskText = e.currentTarget.dataset.task;
    changeTaskStatus(selectedTaskText, state)

    // const tasks = state.get() as Task[];
    // const taskToChangeIndex = tasks.findIndex(task => task.text === selectedTaskText);
    // state[taskToChangeIndex].isDone.get() ? state[taskToChangeIndex].isDone.set(false) : state[taskToChangeIndex].isDone.set(true);

  }

  const handleRemoveTaskButton = (): void => { }


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
            <div className={`${task.isDone ? styles.done : null}`}>{task.text}</div>
            <input type="checkbox" onChange={(e) => handleChangeTaskStatus(e)} data-task={task.text} />
          </div>
        ))}
      </div>
    </div >
  )
}