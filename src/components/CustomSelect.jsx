import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
function CustomSelect({ label, value, onChange, options ,width,name }) {
    const handleChange = (newValue) => {
      onChange(newValue); // Call the onChange function with the new value
    };
  
    return (
      <FormControl sx={{ m: 1, width: width }}>
        <InputLabel>{label}</InputLabel>
        <Select
        name={name}
          value={value}
          onChange={(event) => handleChange(event)} // Pass the new value directly
        >
          {options.map((option) => (
            <MenuItem key={option.value}  value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  }
  
  

export default CustomSelect;
