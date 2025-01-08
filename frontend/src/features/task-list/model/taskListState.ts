import React from "react";
import { hookstate, useHookstate, State } from '@hookstate/core';
import { Task } from "../../../entities/task"


export const taskListState = hookstate<Task[] | []>([
  { id: 1, text: "Доделать Dayplanner", priority: 1, isDone: false },
  { id: 2, text: "Понять Hookstate", priority: 1, isDone: false },
  { id: 3, text: "Реализовать FSD", priority: 1, isDone: false }

]);


export const changeTaskStatus = (text: string, stateInstance: any): void => {
  const tasks = stateInstance.get() as Task[];
  const taskToChangeIndex = tasks.findIndex(task => task.text === text);
  stateInstance[taskToChangeIndex].isDone.get() ? stateInstance[taskToChangeIndex].isDone.set(false) : stateInstance[taskToChangeIndex].isDone.set(true);
}


export const addNewTaskToState = (taskObject: Task, stateInstance: any): void => {
  const tasks = stateInstance.get() as Task[];
  stateInstance.merge([taskObject])
  console.log("Added")
}





