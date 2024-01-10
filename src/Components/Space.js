import React from 'react'
import Navbar from './Navbar'
import Body from './Body'

const Space = ({col,Tap}) => {
  return (
    <div className='space1'>
        <div>
            <Navbar  col={col} Tap={Tap} ></Navbar>
        </div>
        <div >
            <Body  col={col} Tap={Tap} ></Body>
        </div>
      
      
    </div>
  )
}

export default Space
