import { useState } from "react";
function Condition(){

    const[current , setCurrent] = useState(false);
    const[answer , setAnswer] = useState(false);
    


    let Question;
    let showAnswer;
    let Javab;
   

    if(current===true){

        Question= "what is you name?";
        showAnswer= "click below for answer"
    }
     if(answer===true){

     Javab= "MY name is Uday Kasera"
    }
   

    return(
        <>
        <div style={{border:'2px solid black', height:'fit-content', width:'fit-content'}}>
            <h2>Click for question!</h2>
            <button onClick={()=>{setCurrent(!current)}}>Click!</button>
            <h2>{showAnswer}</h2>
           <button onClick={() => setAnswer(!answer)}>Click Me</button>
          
        </div>

        <div style={{border:'2px solid black', height:'40%', width:'70%'}}>
           <h2>{Question}</h2>
           <h3>{Javab}</h3>
        </div>

        </>
    )

}

export default Condition