import Colom from "./colom"

function App() {
  return <center >
    <div class= "container">
      <h1> Todo react app</h1>
      <div class="container text-center">
  <div class="row">
    <div class="col order-last">
      <button type="button" class= " btn btn-outline-primary">Add</button>
    </div>
    <div class="col">
      <input type=" date" />
    </div>
    <div class="col order-first">
    <input type="text" placeholder="enter here"/>    </div>
  </div>
</div>
    </div>
    <Colom></Colom>
  </center>

}

export default App
// cd todo app\todo app-version 1