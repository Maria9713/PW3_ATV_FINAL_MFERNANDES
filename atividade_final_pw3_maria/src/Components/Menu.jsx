import React from 'react';
import { AppBar, Toolbar, IconButton, Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../img/logo4.png'; 

const pages = [
  { name: 'Home', path: '/' },
  { name: 'Cadastrar', path: './Cadastrar' },
  { name: 'Turmas', path: './turmas' }
];

function ResponsiveAppBar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'black' }}>
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img
            alt="Logo"
            src={logo}
            style={{ width: 400, height: 95 }} 
          />
          <Box/> 
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        {pages.map((page) => (
          <IconButton
            key={page.name}
            component={Link}
            to={page.path}
            color="inherit"
            sx={{ mx: 1 }} 
          >
            <Typography variant="body2"sx={{fontSize: '80%'}}>
              {page.name}
            </Typography>
          </IconButton>
        ))}
      </Toolbar>
    </AppBar>
  );
}

export default ResponsiveAppBar;
