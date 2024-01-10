import React from 'react'
import './Dropdown.css'
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const Dropdown = ({show , setshow,isSlideUp, handleClick1}) => {
  return (
  <div className='con' onClick={handleClick1} >

    <div className='box'>
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",borderBottom:" 1px solid #ceced0",padding:"15px",marginLeft:"0px",marginRight:"0px"}} >
        <div style={{fontSize:"26px" }}>
        Create New Assessment
      </div>
      <div onClick={()=>{setshow(false)}}>
        <CloseIcon></CloseIcon>
      </div>
      </div>

      
      <div style={{margin:"20px"}}>
        <div style={{fontSize:"18px"}}>Name of Assessment</div>
        <div style={{border:"1px solid #ceced0",borderRadius:"10px", marginTop:"7px"}}>
          <div style={{margin:"15px" }}>Type Here</div>

        </div>
        
      </div>

      <div style={{margin:"20px", marginTop:""}}>
        <div style={{fontSize:"18px"}}>Purpose of the test</div>
        <div style={{border:"1px solid #ceced0",borderRadius:"10px", marginTop:"7px"}}>
          <div style={{margin:"15px" ,display:"flex",justifyContent:"space-between" ,alignItems:"center",height:"20px"}}>
            <div>Select</div>
            <div><KeyboardArrowDownIcon></KeyboardArrowDownIcon></div>
          </div>
          

        </div>
        
      </div>

      <div style={{margin:"20px" ,marginTop:""}}>
        <div style={{fontSize:"18px"}}>Description</div>
        <div style={{border:"1px solid #ceced0",borderRadius:"10px", marginTop:"7px"}}>
          <div style={{margin:"15px" ,display:"flex",justifyContent:"space-between" ,alignItems:"center",height:"20px"}}>
            <div>Select</div>
            <div><KeyboardArrowDownIcon></KeyboardArrowDownIcon></div>
          </div>
          

        </div>
        
      </div>

      <div style={{margin:"20px",marginTop:""}}>
        <div style={{fontSize:"18px", marginBottom:"10px"}}>Skills</div>
        <div style={{border:"1px solid #ceced0", borderRadius:"10px"}}>
          <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap" ,padding:"10px"}}>
            <div className='skill' >
              <div style={{fontSize:"14px" ,display:"flex",alignItems:"center"}}>UI/UX and Design</div>
              <div style={{ display:"flex",alignItems:"center"}}><CloseIcon></CloseIcon></div>
            </div>
            <div className='skill'>
              <div style={{fontSize:"14px" ,display:"flex",alignItems:"center"}}>No of question</div>
              <div style={{ display:"flex",alignItems:"center"}} ><CloseIcon></CloseIcon></div>
            </div>
            <div className='skill' >
              <div style={{fontSize:"14px" ,display:"flex",alignItems:"center"}}>Web Development</div>
              <div style={{ display:"flex",alignItems:"center"}}><CloseIcon></CloseIcon></div>
            </div>
            <div className='skill'>
              <div style={{fontSize:"14px" ,display:"flex",alignItems:"center"}}>UI/UX and Design</div>
              <div style={{ display:"flex",alignItems:"center"}}><CloseIcon></CloseIcon></div>
            </div>
            <div className='skill'>
              <div style={{fontSize:"14px" ,display:"flex",alignItems:"center"}}>Web Development</div>
              <div style={{ display:"flex",alignItems:"center"}}><CloseIcon></CloseIcon></div>
            </div>
            

          </div>
          <div style={{borderTop:"1px solid #ceced0"}}>
          <div style={{margin:"15px" }}>Type Here</div>

        </div>
        </div>
      </div>

      <div style={{margin:"20px",marginTop:""}}>
        <div style={{fontSize:"18px"}}>Duration of the test</div>
        <div style={{border:"1px solid #ceced0",borderRadius:"10px", marginTop:"7px"}}>
          <div style={{margin:"15px" }}>HH:MM:SS</div>

        </div>
        
      </div>

      <div style={{margin:"20px" ,marginTop:"",backgroundColor:"#0469d2",color:"white",display:"flex",justifyContent:"center",alignItems:"center",height:"40px",borderRadius:"10px"}}>Save</div>
    
    </div>
      
      
  </div>
  )
}

export default Dropdown
