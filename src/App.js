
import DemoBook from './DemoBook';
import Coffee from './images/coffee.png'

function App() {
  return (
    <div class="container" >
      <div class="jumbotron" style={{ position: "relative", overflow: "hidden" }}>
        <div className="row">
          <div className="col-9" style={{ display: "table", margin: "auto" }}>
            <h1 class="display-4"> Gaetano Mondelli </h1>
            <p class="lead">Welcome to my digital desk</p>
          </div>
          <div className="col-3" style={{ display: "table", margin: "auto" }}>
            <img src={Coffee} width="120"></img>
          </div>
        </div>
        <br></br>
        <DemoBook></DemoBook>
      </div>
    </div>

  );
}

export default App;
