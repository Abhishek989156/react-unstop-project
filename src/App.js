
import './App.css';
import Dropdown from './Components/Dropdown';

import Sidebar from './Components/Sidebar';
import Slide from './Components/Dropdown';
import Space from './Components/Space';
import { useState } from 'react';

function App() {
  const [col,setcol]=useState(false);
  function Tap()
  {
    setcol(true);
    setTimeout(()=>{
      setcol(false);
    },1000)

  }
  return (
    <div className="App"  onClick={Tap}>

        <div className='sidebar'> 
         <Sidebar ></Sidebar>
       </div>
       <div className='space'>
         <Space  col={col} Tap={Tap}></Space>
         
       </div> 
        
        
          
        
       
     
        
          
      
    </div>
  );
}

export default App;
