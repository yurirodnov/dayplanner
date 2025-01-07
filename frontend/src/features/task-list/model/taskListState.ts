import React from "react";
import { hookstate, useHookstate, State } from '@hookstate/core';
import { Task } from "../../../entities/task"


export const taskListState = hookstate<Task[] | []>([{ id: 1, text: "Доделать Dayplanner", priority: 1, isDone: false }]);


export const changeTaskStatus = (text: string): void => {
  const tasks = taskListState.get() as Task[];


  console.log(text)

  // if (tasks.length !== 0) {
  //   console.log(tasks.find(task => task.id === id))
  // }
}






// export const useGlobalState = () => {
//   const list = useHookstate(taskListState)


//   return {
//     getTaskListLength: () => list.length,
//   }
// }

