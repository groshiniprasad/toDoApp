import React from "react";
import { Typography, Box } from "@mui/material";
import Layout from "./Layout";
import AddTaskForm from "./AddTaskForm";

const Todos = () => {
  return (
    <Layout>
        <Box sx={{ mt: 2, width: '50%', mx: 'auto' }}>
            <AddTaskForm />
        </Box>
      <Typography variant="h3" component="h1" align="center">
        Todos

      </Typography>
    </Layout>
  );
};

export default Todos;