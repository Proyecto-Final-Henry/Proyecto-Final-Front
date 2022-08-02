
import { Route } from "react-router-dom";
import Home from "./components/Home/Home"
import Login from "./components/Login/Login"
import './App.css';


function App() {
  return (

    <div className="App">
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login}/>
    </div>

  );
}

export default App;
