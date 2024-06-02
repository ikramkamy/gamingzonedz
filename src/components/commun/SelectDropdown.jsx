import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import  InputLabel from '@mui/material/InputLabel/InputLabelJS';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect() {
  const [sortElem, setSortElem] = useState('');

  const handleChange = (event) => {
    setSortElem(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 , maxWidth:150 ,padding:0}}>
      <FormControl fullWidth size="small">
      <InputLabel id="demo-simple-select-label" color="warning"  className="">Sort</InputLabel>
      
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sortElem}
          label="Age"
          onChange={handleChange}
          className='bg-[#D6D6D6] w-full'
      
        >
          <MenuItem  value={10} className='text-[#D6D6D6]'>Most popular</MenuItem>
          <MenuItem value={20}>popular</MenuItem>
          <MenuItem value={30}>new</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}