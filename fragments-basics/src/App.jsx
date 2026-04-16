
function App(){
  // let fooditems= []
  let fooditems= ["dal", "salad", "roti", "vegetable", "milk", "chess", "fruits"]

return ( <>
<h1>healthy foods</h1>
<h2>only veg</h2>
{fooditems.length===0 && <h3> i am still hungry</h3>}

<ul className="list-group">
 {fooditems.map((item)=>(
  <li className="list-group-item">
    {item}
  </li>
 ))}
</ul>
</>
);
} export default App








// mapp function learning in this code//