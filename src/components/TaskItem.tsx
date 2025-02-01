import  { ListItem, ListItemAvatar, ListItemText, Avatar, IconButton, Stack } from "@mui/material";
import { DeleteOutline, CheckOutlined, DoneOutlineOutlined } from "@mui/icons-material";
import TaskIcon from '@mui/icons-material/Task';
import { Task } from '../interfaces';

const TaskItem = ({ task, deleteTask, toggleTask }: { task: Task, deleteTask: (id: string) => void, toggleTask: (id: string) => void }) => {
    const { id, taskName, isCompleted } = task;
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <TaskIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={taskName} />
        <Stack direction="row" spacing={2}>
            <IconButton edge="end" aria-label="toggle" onClick={() => toggleTask(id)}>
                {isCompleted ? <DoneOutlineOutlined /> : <CheckOutlined />}
            </IconButton>
            <IconButton edge="end" aria-label="delete" onClick={() => deleteTask(id)}>
                <DeleteOutline />
            </IconButton>
        </Stack>
    </ListItem>
  );
}

export default TaskItem;