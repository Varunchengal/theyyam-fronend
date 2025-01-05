import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function BottomIcons() {
  return (
    <div>
        <div className='foot'>
            <div className='row'>
                <div className='col-3'><HomeIcon/></div>
                <div className='col-3'><SearchIcon/></div>
                <div className='col-3'><CalendarMonthIcon/></div>
                <div className='col-3'><AccountCircleIcon/></div>
            </div>
        </div>
    </div>
  )
}

export default BottomIcons