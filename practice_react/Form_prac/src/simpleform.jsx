import  './color.css'
import { useState} from "react";
function SimpleForm(){

    const[name, setName]= useState("")
    const[email, setEmail]= useState("")
    const[show, setShow]= useState(true);


    const Handelsubmmit =(event)=>{
        event.preventDefault();
        
        console.log("Name : ",name);
        console.log("Email : ",email);

    }

    function Changer(){



    }

return (
        <form onSubmit={Handelsubmmit} >

    <h1> Form</h1>
    <label>Name : </label>
    <input type="text" value={name} onChange={(e)=> setName(e.target.value)} /><br />

    <label>Email : </label>
    <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} /><br />


       <div className="Password">
        <h3>password : </h3><input type={show? "text" : "password"} />
         <button className="Pass_button" onClick={()=>setShow(!show)}>{show? "Show" : "Hide"}</button><br />
       </div>
       <br />


    <button type="submit">Submit</button>
   </form>)



}
export default SimpleForm

