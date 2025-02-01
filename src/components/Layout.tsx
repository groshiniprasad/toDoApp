import React from "react";
import { AppBar, Toolbar, Typography, IconButton,  } from "@mui/material" ;
import { MenuBookOutlined } from "@mui/icons-material";

const Layout = ({ children }) => {
  return (
    <>
    <AppBar position="static" className="header">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="menu">
          <MenuBookOutlined />
        </IconButton>
        <Typography variant="h6" component="div">
            Task Master
        </Typography>
      </Toolbar>
    </AppBar>
    {children}
    <Typography component="p" align="center" className="footer">
        &copy; 2025 Task Master
        
    </Typography>
    </>
  );
};

export default Layout;