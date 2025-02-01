import { TextField, Button } from "@mui/material";
import { AddTaskOutlined } from "@mui/icons-material";
import { useForm, SubmitHandler } from "react-hook-form";
import { TaskFormInput, AddTaskFormProps } from "../interfaces";


const AddTaskForm: React.FC<AddTaskFormProps> = ({ addTask }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<TaskFormInput>();
  const onSubmit: SubmitHandler<TaskFormInput> = (FormData) => {
    addTask(FormData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="Enter Task"
        variant="outlined"
        fullWidth
        margin="normal"
        {...register("taskName", { required: true, minLength: 6 })}
        error={!!errors.taskName}
        helperText={errors.taskName ? "Task name is required and should be at least 6 characters long" : ""}
      />
      <Button
        type="submit"
        style={{ margin: "10px 0" }}
        variant="contained"
        color="primary"
        startIcon={<AddTaskOutlined />}
      >
        Add Task
      </Button>
    </form>
  );
};

export default AddTaskForm;