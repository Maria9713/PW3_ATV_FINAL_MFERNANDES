import React from 'react';
import Button from '@mui/material/Button';

const CustomButton = ({ children, ...props }) => {
  return (
    <Button
      variant="contained"
      color="primary"
      sx={{
        mt: 2,
        backgroundColor: 'white',
        color: 'black',
        fontWeight: 'bold',
        transition: '0.3s',
        '&:hover': {
          backgroundColor: '#ffffff',
          color: '#001',
          transform: 'scale(1.1)'
        }
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
