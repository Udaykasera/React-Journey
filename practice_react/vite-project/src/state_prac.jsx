import {useState} from "react";
import "./profile.css"

function State(){
const[index,setIndex]= useState(0);
 
function uday() {
    setIndex(index+1)
}

function kasera() {
    setIndex(index-1)
}


return <div className="main">

<h1> click below button</h1>
<h3>lets practice with useState</h3>
<h2>Count:{index}</h2>
<button onClick={uday}>click me</button>
<button onClick={kasera}>click</button>
</div>
}
export default State;