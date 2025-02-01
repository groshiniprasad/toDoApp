import { useState } from "react";
import { Typography, Box } from "@mui/material";
import uuid from "react-uuid";
import Layout from "./Layout";
import AddTaskForm from "./AddTaskForm";
import { TaskFormInput, Task } from "../interfaces";
import TodoList from "./TodoList";

const TodoPage = () => {
  const [ todoList, setTodoList ] = useState<Task[]>([]);
  
  const addTask = (task: TaskFormInput) => {
    const newTask: Task = {
      id: uuid(),
      taskName: task.taskName,
      isCompleted: false,
    };
    setTodoList([...todoList, newTask]);
  };

  const deleteTask = (id: string) => {
    setTodoList(todoList.filter(task => task.id !== id));
  };

  const toggleTask = (id: string) => {
    setTodoList(todoList.map(task => 
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    ));
  };

  return (
    <Layout>
        <Box sx={{ mt: 2, width: '50%', mx: 'auto' }}>
            <AddTaskForm addTask={addTask} />
        </Box>
        <Box sx={{ mt: 2, width: '50%', mx: 'auto' }}>
            <Typography variant="h4" align="center">Task List</Typography>
            <TodoList todoList={todoList} deleteTask={deleteTask} toggleTask={toggleTask} />
        </Box>
    </Layout>
  );
};

export default TodoPage;