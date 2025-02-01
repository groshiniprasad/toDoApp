import { useState } from "react";
import { Typography, Box } from "@mui/material";
import uuid from "react-uuid";
import Layout from "./Layout";
import AddTaskForm from "./AddTaskForm";
import { TaskFormInput, Task } from "../interfaces";

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

  return (
    <Layout>
        <Box sx={{ mt: 2, width: '50%', mx: 'auto' }}>
            <AddTaskForm addTask={addTask} />
        </Box>
      <Typography variant="h3" component="h1" align="center">
        TodoPage

      </Typography>
    </Layout>
  );
};

export default TodoPage;