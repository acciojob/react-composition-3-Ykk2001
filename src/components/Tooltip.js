import React, { useState } from 'react'

export default function Tooltip({text,children}) {
    const[visible,setVisible]=useState(false);
  return (
    <div>
      <span className='tooltip'
      onMouseOver={()=>setVisible(true)}
      onMouseLeave={()=>setVisible(false)}
      
      >
        {children}
        {
         visible && (<span id='tooltip-text' className='tooltiptext' style={{color:"red"}}>{text}</span>)
        }
      </span>
    </div>
  )
}
