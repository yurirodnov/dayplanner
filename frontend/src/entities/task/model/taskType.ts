export interface Task {
  id: number
  text: string
  priority: number
  isDone: boolean
}



export interface TaskList {
  data: Task[] | [];
}