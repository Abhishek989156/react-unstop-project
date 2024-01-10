import React, { useState } from 'react'
import './Body.css'
import TableRowsIcon from '@mui/icons-material/TableRows';
import GroupIcon from '@mui/icons-material/Group';
import LanguageIcon from '@mui/icons-material/Language';
import WorkIcon from '@mui/icons-material/Work';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LinkIcon from '@mui/icons-material/Link';
import AddLinkSharpIcon from '@mui/icons-material/AddLinkSharp';
import { Slide } from '@mui/material';
import Dropdown from './Dropdown';
import { FlashOnRounded } from '@mui/icons-material';


const Body = ({col,Tap}) => {

  const[show,setshow]=useState(false);
  const [isSlideUp, setIsSlideUp] = useState(false);
  const handleClick1 = () => {

   setshow(!show)
    setIsSlideUp(!isSlideUp);
  };
  


  return (
   
    <div className='body' >

      <div className='assessmentoverview'>
        <div style={{paddingTop:"20px",paddingBottom:"20px",fontSize:"20px"}}>Assessments Overview</div>

        <div className='cards1'> 

        <div className='subcards1' style={{width:"13%" ,borderRight:"1px solid #ceced0"}}>

         <div style={{margin:"15px", fontSize:"15px"}}>Total Assessments</div>
         <div style={{display:"flex",alignItems:"center",justifyContent:"start" ,height:"100vh"}}>
          <div style={{background:"#ebe8fd",marginLeft:"15px",marginBottom:"20px",height:"60%",width:"25%",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"10px"}}><TableRowsIcon></TableRowsIcon></div>
          <div style={{fontWeight:"bold" ,marginLeft:"15px",marginBottom:"20px",fontSize:"20px"}}>34</div>
         </div>

        </div>


        <div className='subcards1' style={{width:"30%",borderRight:"1px solid #ceced0"}}> 
           <div style={{margin:"15px",fontSize:"15px",marginBottom:"18px"}}>Candidates</div>
           <div style={{display:"flex",gap:"1rem"}}>
            
              <div style={{background:"#ebe8fd",marginLeft:"15px",height:"100%",width:"11%",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"10px"}}><GroupIcon></GroupIcon></div>

              <div style={{display:"flex", flexDirection:"column",borderRight:"1px solid #ceced0",width:"30%"}} >
                <div style={{display:"flex",gap:".3rem",alignItems:"center"}}>
                  <div style={{fontSize:"20px",fontWeight:"bold"}}>11,145</div>
                  <div style={{color:"#65d9a0",fontSize:"13px"}}>+89</div>
                </div>
                <div style={{fontSize:"12px",marginTop:"3px"}}>Total candidate</div>
                
              </div>

              <div style={{display:"flex", flexDirection:"column",width:"40%"}} >
                <div style={{display:"flex",gap:".3rem",alignItems:"center"}}>
                  <div style={{fontSize:"20px",fontWeight:"bold"}}>1,14</div>
                  <div style={{color:"#65d9a0",fontSize:"13px"}}>+89</div>
                </div>
                <div style={{fontSize:"12px",marginTop:"3px"}}>Who Attamped</div>
                
              </div>
               
            
           </div>
        </div>

        <div className='subcards1' style={{width:"40%",borderRight:"1px solid #ceced0"}}> 
           <div style={{margin:"15px",fontSize:"15px",marginBottom:"18px"}}>Candidates</div>
           <div style={{display:"flex",gap:"1rem"}}>
            
              <div style={{background:"rgb(255, 224, 235)",marginLeft:"15px",height:"100%",width:"11%",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"10px"}}><LanguageIcon style={{colour:"white"}}></LanguageIcon></div>

              <div style={{display:"flex", flexDirection:"column",borderRight:"1px solid #ceced0",width:"30%"}} >
                <div style={{display:"flex",gap:".3rem",alignItems:"center"}}>
                  <div style={{fontSize:"20px",fontWeight:"bold"}}>11,000</div>
                  <div style={{color:"#65d9a0",fontSize:"13px"}}>+89</div>
                </div>
                <div style={{fontSize:"12px",marginTop:"3px"}}>E-mail</div>
                
              </div>

              <div style={{display:"flex", flexDirection:"column",borderRight:"1px solid #ceced0",width:"25%"}} >
                <div style={{display:"flex",gap:".3rem",alignItems:"center"}}>
                  <div style={{fontSize:"20px",fontWeight:"bold"}}>145</div>
                  <div style={{color:"#65d9a0",fontSize:"13px"}}>+89</div>
                </div>
                <div style={{fontSize:"12px",marginTop:"3px"}}>Social Share</div>
                
              </div>

              <div style={{display:"flex", flexDirection:"column",width:"40%"}} >
                <div style={{display:"flex",gap:".3rem",alignItems:"center"}}>
                  <div style={{fontSize:"20px",fontWeight:"bold"}}>145</div>
                  <div style={{color:"#65d9a0",fontSize:"13px"}}>+89</div>
                </div>
                <div style={{fontSize:"12px",marginTop:"3px"}}>Unique Link</div>
                
              </div>
               
            
           </div>
        </div>

        <div className='subcards1' style={{width:"17%" }}>

         <div style={{margin:"15px", fontSize:"15px"}}>Total Purpose</div>
         <div style={{display:"flex",alignItems:"center",justifyContent:"start" ,height:"100vh"}}>
          <div style={{background:"#e5f1fc",marginLeft:"15px",marginBottom:"20px",height:"60%",width:"21%",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"10px"}}><AddLinkSharpIcon></AddLinkSharpIcon></div>
          <div style={{fontWeight:"bold" ,marginLeft:"15px",marginBottom:"20px",fontSize:"20px"}}>11</div>
         </div>

        </div>

        </div>

      </div>







      <div className='myassessment'>
        <div style={{paddingTop:"20px",paddingBottom:"20px",fontSize:"20px"}}>My assessment</div>

        <div className='cards2'>
          
        <div className='subcards22' onClick={handleClick1 }>
         <div style={{ display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"50%",height:"65px",width:"65px",backgroundColor:"white"}}>
          <div style={{color:"#0b79e7",fontSize:"50px" }}>+</div>
          </div>
         <div style={{fontSize:"20px",marginTop:"12px"}} >New Assessment</div>
         <div style={{fontSize:"13px",marginTop:"12px"}}><div>From here you can add questions of multiple types</div>   </div>

        </div>


        <div className='subcards2'>

         <div style={{display:"flex",alignItems:"center",justifyContent:"space-between", margin:"15px"}}>
          <div style={{borderRadius:"10px",padding:"10px",background:"#ebe8fd"}}><WorkIcon style={{color:"violet"}}></WorkIcon></div>
          <div style={{}} ><MoreVertIcon></MoreVertIcon></div>
         </div>

         <div style={{margin:"15px",fontSize:"20px",marginBottom:"5px"}}>Math Assessment</div>

         <div style={{display:"flex",alignItems:"center" ,gap:".2rem"}}>
          <div style={{borderRight:"1px solid #ceced0" ,marginLeft:"15px",paddingRight:"12px"}}>Job</div>
          <div style={{ display:"flex",alignItems:"center" ,gap:".2rem"}}><div ><CalendarMonthIcon style={{height:"18px"}}></CalendarMonthIcon></div><div style={{height:"18px",display:"flex",alignItems:"center",fontSize:"12px"}}>20th Apr 2023</div></div>
         </div>

         <div style={{display:"flex",alignItems:"center" ,justifyContent:"space-around" ,borderTop:"2px dashed #ceced0",gap:"2rem",marginTop:"10px",flex:"1" ,marginRight:"10px",marginLeft:"10px"}}>

          <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"1rem",marginTop:"10px"}}>

            <div style={{display:"flex",justifyContent:"center",flexDirection:"column"}}>
               <div>00</div>
               <div style={{fontSize:"13px",marginTop:"3px"}}>Duration</div>
            </div>
            <div style={{display:"flex",justifyContent:"center",flexDirection:"column"}}>
               <div>00</div>
               <div style={{fontSize:"13px",marginTop:"3px"}}>Question</div>
            </div>
           
          </div>

          <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"1rem",marginTop:"10px" }}>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"row", border:"1px solid #2c568a" ,borderRadius:"50px",gap:".2rem"}}>
               
                <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginLeft:"8px"}}><LinkIcon></LinkIcon></div>
               
               <div style={{fontSize:"13px",display:"flex",justifyContent:"center",alignItems:"center", marginRight:"8px"}}>Share</div>
            </div>
            <div style={{display:"flex",justifyContent:"center",flexDirection:"column"}}>
               <div style={{border:"1px solid" ,borderRadius:"50%" ,background:"#6548ee",color:"white",padding:"5px",fontSize:"13px"}}>LP</div>
              
            </div>
           
          </div>
         </div>


        </div>




        <div className='subcards2'>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between", margin:"15px"}}>
          <div style={{borderRadius:"10px",padding:"10px",background:"#ebe8fd"}}><WorkIcon style={{color:"violet"}}></WorkIcon></div>
          <div style={{}} ><MoreVertIcon></MoreVertIcon></div>
         </div>

         <div style={{margin:"15px",fontSize:"20px",marginBottom:"5px"}}>Math Assessment</div>

         <div style={{display:"flex",alignItems:"center" ,gap:".2rem"}}>
          <div style={{borderRight:"1px solid #ceced0" ,marginLeft:"15px",paddingRight:"12px"}}>Job</div>
          <div style={{ display:"flex",alignItems:"center" ,gap:".2rem"}}><div ><CalendarMonthIcon style={{height:"18px"}}></CalendarMonthIcon></div><div style={{height:"18px",display:"flex",alignItems:"center",fontSize:"12px"}}>20th Apr 2023</div></div>
         </div>

         <div style={{display:"flex",alignItems:"center" ,justifyContent:"space-around" ,borderTop:"2px dashed #ceced0",gap:"2rem",marginTop:"10px",flex:"1",marginLeft:"10px",marginRight:"10px"}}>

          <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"1rem",marginTop:"10px"}}>

            <div style={{display:"flex",justifyContent:"center",flexDirection:"column"}}>
               <div>00</div>
               <div style={{fontSize:"13px",marginTop:"3px"}}>Duration</div>
            </div>
            <div style={{display:"flex",justifyContent:"center",flexDirection:"column"}}>
               <div>
                00
               </div>
               <div style={{fontSize:"13px",marginTop:"3px"}}>Question</div>
            </div>
           
          </div>

          <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"1rem",marginTop:"10px" }}>
          <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"row", border:"1px solid #2c568a" ,borderRadius:"50px",gap:".2rem"}}>
               
                <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginLeft:"8px"}}><LinkIcon></LinkIcon></div>
               
               <div style={{fontSize:"13px",display:"flex",justifyContent:"center",alignItems:"center", marginRight:"8px"}}>Share</div>
            </div>
            <div style={{display:"flex",justifyContent:"center",flexDirection:"column"}}>
            <div style={{border:"1px solid  " ,borderRadius:"50%" ,background:"#6548ee",color:"white",padding:"5px",fontSize:"13px"}}>LP</div>
              
            </div>
           
          </div>
         </div>

        </div>
        </div>
      </div>


      {
        show && <Dropdown show={show} setshow={setshow} isSlideUp={isSlideUp} handleClick1={handleClick1}></Dropdown>
      }
      


      
     




    </div>
    


  )
}

export default Body
