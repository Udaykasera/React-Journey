import './App.css'; 

   function Car(){
    const mycar ={
        name :"venue ",
        color : "red",
        model: "top",
    }
    const mycar2={
          name :"syara ",
        color : "green",
        model: "top",
    }

    const name= false;
    return(
        
        <div className="uday">
        <h1> this my car: {mycar.name} {mycar.color}{mycar.model}</h1>
        <h1> this my car: {mycar2.name} {mycar2.color}{mycar2.model}</h1>
         <div style={{ backgroundColor: 'aqamarin' }}>
        {name ? <h1>this Uday kasera</h1> : <h1>not welcome</h1>}
        </div>
        </div>
           
    )
   }
    export default Car;