import React from 'react';
import { TextField } from '@mui/material';

export default function CustomInput({ text, id, value, handlerOnChange, type, placeholder }) {
  return (
    <div style={{ margin: '8px', position: 'relative' }}>
      <TextField
        id={id}
        label={text}
        variant="outlined"
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={handlerOnChange}
        style={{ width: '100%' }}
        InputLabelProps={{ shrink: true, style: { transform: 'translate(14px, 12px) scale(1)' } }}
        InputProps={{ style: { backgroundColor: 'white' } }}
      />
    </div>
  );
}
