export interface TaskItem {
  id: number;
  task: string;
  description: string;
  priority: number;
  deadline: string;
}


export interface TaskList {
  taskList: TaskItem[];
}

