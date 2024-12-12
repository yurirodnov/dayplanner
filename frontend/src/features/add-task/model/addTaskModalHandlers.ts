import { isAddTaskModalOpen } from "./addTaskModalState";


export const openAddTaskModalHandler = () => {
  isAddTaskModalOpen.set(true);
  console.log(isAddTaskModalOpen.get())
}

export const closeAddTaskModalHandler = () => {
  isAddTaskModalOpen.set(false)
  console.log(isAddTaskModalOpen.get())
}