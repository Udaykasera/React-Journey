import "./symbols.css";
// import "./index.css";
const Symbols = ({handlebutton}) =>{
const buttonName = [
  "C", "1", "2", "3", "+",
  "4", "5", "6", "-", 
  "7", "8", "9", "*", 
  "0", "=", "/"
];
    return(
  <div className="buttons-grid">
 {buttonName.map(buttonName => <button className="button">{buttonName} </button>)}
   </div> );
   
};
export default Symbols;