import { List } from "@mui/material";
import TaskItem from "./TaskItem";
import { Task } from "../interfaces";

interface TodoListProps {
  todoList: Task[];
  deleteTask: (id: string) => void;
  toggleTask: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todoList, deleteTask, toggleTask }) => {
  return (
    <List>
      {todoList.map((task: Task) => (
        <TaskItem key={task.id} task={task} deleteTask={deleteTask} toggleTask={toggleTask} />
      ))}
    </List>
  );
};  

export default TodoList;