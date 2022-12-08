
import React from 'react'
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

const ProgressBar = () => {
  return (
    <div className="flex flex-col w-full">
        <div>
        <Progress
        percent={70}
         status="error"
/>

       </div> 
     
     </div>
  )
}

export default ProgressBar