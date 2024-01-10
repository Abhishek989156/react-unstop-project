import React from 'react'
import './Navbar.css';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
const Navbar = () => {
  return (
    
    <div>
    <div className='navbar'>
       <div id='assessment'>Assessment</div>
      <div className='rightside'>
       <div id='myassess'>My Assessments</div>
       <div><PhoneIphoneIcon></PhoneIphoneIcon></div>

      </div>
    </div>
    </div>
  )
}

export default Navbar
