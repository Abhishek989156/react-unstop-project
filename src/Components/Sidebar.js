import React from 'react'
import Assessment from './Assessment'
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssessmentIcon from '@mui/icons-material/Assessment';
import QuizIcon from '@mui/icons-material/Quiz';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';

const Sidebar = () => {
  return (
    <div >
     <div className='sidebar1' style={{paddingBottom:"15px",borderBottom:"2px dashed #ceced0",marginLeft:"20px",marginRight:"20px"}}>
     <div className='option'> 
       <div className='icon' >
       <DashboardIcon></DashboardIcon>
       </div>
       <div className='icon'>
         Dashboard
       </div>
      
       </div>

      <div className='assessoption'>
        <div className='icon'>
              <AssessmentIcon></AssessmentIcon>
        </div>
        <div className='icon'>
             <Assessment></Assessment>
        </div>
        
      </div>
      
     
      <div className='option'>
        <div className='icon'>
            <QuizIcon></QuizIcon>

        </div>
        <div className='icon'>
            My Library
        </div>
        
     </div>
     </div>

    

      <div className='sidebar1'>
        <div className='option'>
       
        <div className='admin' style={{background:"#fbebea" ,color:"red",marginBottom:"2px"}}>  Admin
        </div>
      </div>

      <div className='option' style={{marginTop:"1px"}}>
       <div>
        <ContentPasteIcon></ContentPasteIcon>

       </div>
       <div >Round Status
        </div>
       </div>
      </div>
      

    </div>
  )
}

export default Sidebar
