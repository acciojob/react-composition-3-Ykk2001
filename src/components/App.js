
import React from "react";
import "../styles/Tooltip.css"
import Tooltip from "./Tooltip";

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        
          <Tooltip text="This is a tooltip">
            <h2>Hover over me</h2>
          </Tooltip>
        
           <hr></hr>
        
          <Tooltip text="This is another tooltip">
            <p>Hover over me to see another tooltip</p>
          </Tooltip>

          <hr></hr>
        
    </div>
  )
}

export default App
