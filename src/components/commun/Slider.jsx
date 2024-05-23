import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import '../../components/commun/svgStyling.css'
//import { createTheme, ThemeProvider } from '@mui/material';
function valuetext(value) {
  return `${value}DZD`;
}

export default function RangeSlider() {
  const [value, setValue] = React.useState([20000, 37000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
    <Box  className="w-full">
      <Slider
      min={10000}
      max={50000}
     sx={{
      '&.MuiSlider-thumbColorWarning': {
        backgroundColor: '#CA2026',
        '&:hover': {
          backgroundColor: 'darkred',
        },
        '&.css-188mx6n-MuiSlider-roo':{
          backgroundColor: '#CA2026',
        }
      },
     
    }}
        getAriaLabel={() => 'price range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        color='white'
        className='MuiSlider-thumbColorWarning my-5'
      />
    </Box>
   <div className='flex justify-between max-md:flex-col'>
   <h2 >{value[0]} to {value[1]}</h2>
    <div className='relative flex justify-center items-center'>
          <svg
             className=''
              xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="80.164" height="24.232" viewBox="0 0 80.164 24.232">
               <defs>
                 <linearGradient id="linear-gradient" x1="0.043" y1="0.5" x2="0.953" y2="0.5" gradientUnits="objectBoundingBox">
                   <stop offset="0" stop-color="#ca2026"/>
                   <stop offset="1" stop-color="#651013"/>
                 </linearGradient>
               </defs>
               <path id="Tracé_428" data-name="Tracé 428" d="M2.421,0H75.941L68.579,24.232h-72.8Z" transform="translate(4.223)" fill="url(#linear-gradient)"/>
          </svg>

    <h1 className='absolute top-0  flex items-center z-10 h-full'>filter</h1>

    </div>
    
    
    
    </div> 
    
    
    </div>
  );
}