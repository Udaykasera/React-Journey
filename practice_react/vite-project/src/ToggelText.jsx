import {useState} from 'react'

function ToggelText() {

    const[isVisible, SetIsVisible]= useState(true);


  return (
    <div>
      <button onClick={()=>{
        SetIsVisible(!isVisible)
      }}>
        {isVisible? "show-text" :"hide-text"} 

      </button><br/>
      {isVisible && "programming with uday kasera"}
    </div>
  )
}

export default ToggelText
