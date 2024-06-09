import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

export default function SelectSala({ id, options, text, label, handlerOnChange, Typography }) {
  const [selectedOptionId, setSelectedOptionId] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleChange = (event) => {
    const optionId = event.target.value;
    setSelectedOptionId(optionId);
    handlerOnChange(optionId, options);
  };

  const handleMenuOpen = () => {
    setMenuOpen(true);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  return (
    <div style={{ margin: '8px', minWidth: '120px', position: 'relative' }}>
      <FormControl fullWidth>
        <InputLabel 
          htmlFor={id}
          style={{ display: menuOpen || selectedOptionId ? 'none' : 'block', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'black', fontSize: '1rem' }}
        >
          {label}
        </InputLabel>
        <Select
          labelId={id}
          id={id}
          value={selectedOptionId}
          onChange={handleChange}
          onOpen={handleMenuOpen}
          onClose={handleMenuClose}
          style={{ background: 'white' }}
        >
          <MenuItem value="" style={{ color: 'white', fontWeight: 'bold', fontSize: '1.2rem' }}>{text}</MenuItem>
          {options.map((option) => (
            <MenuItem key={option.id} value={option.id}>
              {option.Sala}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
