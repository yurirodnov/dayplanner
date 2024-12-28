import { isAddTaskModalOpen } from "./addTaskModalState";


export const openAddTaskModalHandler = (): void => {
  isAddTaskModalOpen.set(true);
  console.log(isAddTaskModalOpen.get())
}

export const closeAddTaskModalHandler = (): void => {
  isAddTaskModalOpen.set(false)
  console.log(isAddTaskModalOpen.get())
}

export const closeAddTaskModalHandlerEsc = (e: React.KeyboardEvent<HTMLInputElement>): void => {
  console.log(e)
  if (e.key === "Escape") {
    isAddTaskModalOpen.set(false)
  }

}
