export interface Task {
  id: number
  text: string
  priority: number
  completed: boolean
}



export interface TaskList {
  data: Task[] | [];
}