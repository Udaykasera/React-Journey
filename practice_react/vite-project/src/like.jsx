import {useState} from 'react'
import "./profile.css"
function Like() {

    const[isVisible, SetIsVisible]= useState(true);
  return (
    <div>
      <button className='liked'  onClick={()=>{
        SetIsVisible(!isVisible)
      }}>
        {isVisible? " ❤️Liked" :"Like"} 

      </button><br/>
    </div>
  )
}

export default Like
