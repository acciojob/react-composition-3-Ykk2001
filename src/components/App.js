
import React, { useState } from "react";
import './../styles/App.css';
import Tooltip from "./Tooltip";

const App = () => {
  const[text,setText]=useState()
  return (
    <div>
        {/* Do not remove the main div */}
        <h2>
          <Tooltip text="This is a tooltip">Hover over me</Tooltip>
        </h2>

        <p>
          <Tooltip text="This is another tooltip">Hover over me to see another tooltip</Tooltip>
        </p>
    </div>
  )
}

export default App
