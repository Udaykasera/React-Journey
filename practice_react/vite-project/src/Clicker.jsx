import { useState } from "react"
import  './clicker.css';
export default function Clicker(){

        const[counting, setCounting]=useState(0);

       const plus =  ()=>{
            setCounting(counting+3)
        }

    return(

        <div className="container">
            <p> clicked numbers {counting} </p>
            <button onClick={plus}>click me</button>
        </div>

    )
}