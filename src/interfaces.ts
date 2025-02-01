export interface TaskFormInput {
    taskName: string;
  }

export  interface AddTaskFormProps {
    addTask: (task: TaskFormInput) => void;
  }

export interface Task {
    id: string;
    taskName: string;
    isCompleted: boolean;
}